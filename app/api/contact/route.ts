import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { RateLimiterMemory } from "rate-limiter-flexible";
import validator from "validator";

// Force dynamic rendering for this API route
export const dynamic = "force-dynamic";

// Rate limiter: 3 requests per 10 minutes per IP
const rateLimiter = new RateLimiterMemory({
  points: 3, // Number of requests
  duration: 600, // Per 10 minutes
});

// Input validation and sanitization
function validateAndSanitizeInput(data: any) {
  const errors: Record<string, string> = {};

  // Validate name
  if (!data.name || typeof data.name !== "string") {
    errors.name = "Nama harus diisi";
  } else if (data.name.trim().length < 2 || data.name.trim().length > 100) {
    errors.name = "Nama harus antara 2-100 karakter";
  }

  // Validate email
  if (!data.email || typeof data.email !== "string") {
    errors.email = "Email harus diisi";
  } else if (!validator.isEmail(data.email)) {
    errors.email = "Format email tidak valid";
  }

  // Validate project type
  const allowedProjectTypes = [
    "Website Development",
    "Mobile Application",
    "Sistem Architecture",
    "Sistem Informasi",
    "Konsultasi IT",
    "Perangkat IT",
    "Lainnya",
  ];
  if (!data.projectType || !allowedProjectTypes.includes(data.projectType)) {
    errors.projectType = "Pilih jenis project yang valid";
  }

  // Validate WhatsApp (optional)
  if (data.whatsapp && typeof data.whatsapp === "string") {
    const cleanWhatsApp = data.whatsapp.replace(/[^\d+]/g, "");
    if (cleanWhatsApp && !validator.isMobilePhone(cleanWhatsApp, "id-ID")) {
      errors.whatsapp = "Format nomor WhatsApp tidak valid";
    }
  }

  // Validate description (optional)
  if (data.description && typeof data.description === "string") {
    if (data.description.length > 1000) {
      errors.description = "Deskripsi maksimal 1000 karakter";
    }
  }

  // Sanitize data
  const sanitizedData = {
    name: validator.escape(data.name?.trim() || ""),
    email: validator.normalizeEmail(data.email?.trim() || "") || "",
    whatsapp: data.whatsapp?.trim() || "",
    projectType: data.projectType?.trim() || "",
    description: validator.escape(data.description?.trim() || ""),
  };

  return { errors, sanitizedData };
}

// Create nodemailer transporter
function createTransporter() {
  if (
    !process.env.EMAIL_HOST ||
    !process.env.EMAIL_USER ||
    !process.env.EMAIL_PASS
  ) {
    throw new Error("Email configuration is missing");
  }

  return nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: parseInt(process.env.EMAIL_PORT || "587"),
    secure: process.env.EMAIL_SECURE === "true", // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });
}

// Email template for admin notification
function getAdminEmailTemplate(data: any) {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>Pesan Baru dari Website HaloInfitech</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #3b82f6, #1d4ed8); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
        .content { background: #f8fafc; padding: 20px; border: 1px solid #e2e8f0; }
        .footer { background: #1f2937; color: white; padding: 15px; text-align: center; border-radius: 0 0 8px 8px; }
        .field { margin-bottom: 15px; }
        .label { font-weight: bold; color: #374151; }
        .value { background: white; padding: 8px; border-radius: 4px; border: 1px solid #d1d5db; }
      </style>
    </head>
    <body>
      <div class="header">
        <h2>🚀 Pesan Baru dari Website HaloInfitech</h2>
        <p>Ada calon klien yang tertarik dengan layanan Anda!</p>
      </div>
      <div class="content">
        <div class="field">
          <div class="label">Nama Lengkap:</div>
          <div class="value">${data.name}</div>
        </div>
        <div class="field">
          <div class="label">Email:</div>
          <div class="value">${data.email}</div>
        </div>
        ${
          data.whatsapp
            ? `
        <div class="field">
          <div class="label">WhatsApp:</div>
          <div class="value">${data.whatsapp}</div>
        </div>
        `
            : ""
        }
        <div class="field">
          <div class="label">Jenis Project:</div>
          <div class="value">${data.projectType}</div>
        </div>
        ${
          data.description
            ? `
        <div class="field">
          <div class="label">Deskripsi Kebutuhan:</div>
          <div class="value">${data.description}</div>
        </div>
        `
            : ""
        }
        <div class="field">
          <div class="label">Waktu:</div>
          <div class="value">${new Date().toLocaleString("id-ID")}</div>
        </div>
      </div>
      <div class="footer">
        <p>HaloInfitech - Infinity Technology Solutions</p>
        <p>Segera follow up untuk mendapatkan klien baru! 🎯</p>
      </div>
    </body>
    </html>
  `;
}

// Auto-reply email template for user
function getAutoReplyTemplate(data: any) {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>Terima Kasih - HaloInfitech</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #3b82f6, #1d4ed8); color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0; }
        .content { background: white; padding: 30px; border: 1px solid #e2e8f0; }
        .footer { background: #1f2937; color: white; padding: 20px; text-align: center; border-radius: 0 0 8px 8px; }
        .highlight { background: #eff6ff; padding: 15px; border-radius: 8px; border-left: 4px solid #3b82f6; margin: 20px 0; }
        .contact-info { background: #f0fdf4; padding: 15px; border-radius: 8px; margin: 20px 0; }
        .btn { display: inline-block; background: #22c55e; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; margin: 10px 5px; }
      </style>
    </head>
    <body>
      <div class="header">
        <h1>🎉 Terima Kasih, ${data.name}!</h1>
        <p>Pesan Anda telah kami terima</p>
      </div>
      <div class="content">
        <p>Halo <strong>${data.name}</strong>,</p>
        
        <p>Terima kasih telah menghubungi <strong>HaloInfitech</strong>! Kami sangat senang mengetahui ketertarikan Anda terhadap layanan digital kami.</p>
        
        <div class="highlight">
          <h3>📝 Ringkasan Permintaan Anda:</h3>
          <ul>
            <li><strong>Jenis Project:</strong> ${data.projectType}</li>
            <li><strong>Email:</strong> ${data.email}</li>
            ${
              data.whatsapp
                ? `<li><strong>WhatsApp:</strong> ${data.whatsapp}</li>`
                : ""
            }
            ${
              data.description
                ? `<li><strong>Deskripsi:</strong> ${data.description}</li>`
                : ""
            }
          </ul>
        </div>

        <p><strong>Apa yang terjadi selanjutnya?</strong></p>
        <ol>
          <li>Tim kami akan menganalisis kebutuhan project Anda</li>
          <li>Kami akan menghubungi Anda dalam <strong>24 jam</strong> untuk konsultasi gratis</li>
          <li>Diskusi detail mengenai timeline, budget, dan spesifikasi teknis</li>
          <li>Proposal dan penawaran yang sesuai dengan kebutuhan Anda</li>
        </ol>

        <div class="contact-info">
          <h3>📞 Kontak Langsung:</h3>
          <p>Jika ada yang mendesak, Anda dapat menghubungi kami langsung:</p>
          <a href="https://wa.me/6285157517798" class="btn">💬 WhatsApp</a>
          <a href="mailto:haloinfitech@gmail.com" class="btn">📧 Email</a>
        </div>

        <p>Kami berkomitmen memberikan solusi digital terbaik dengan harga mahasiswa dan kualitas profesional.</p>
        
        <p>Salam hangat,<br>
        <strong>Tim HaloInfitech</strong><br>
        <em>Infinity Technology Solutions</em></p>
      </div>
      <div class="footer">
        <p><strong>HaloInfitech</strong> - UKM IT Universitas Negeri Padang</p>
        <p>Web Development • Mobile Apps • Digital Solutions</p>
        <p>📧 haloinfitech@gmail.com | 📱 +62 851-5751-7798</p>
      </div>
    </body>
    </html>
  `;
}

export async function POST(request: NextRequest) {
  try {
    // Rate limiting check
    try {
      await rateLimiter.consume(request.ip || "unknown");
    } catch (rateLimiterRes: any) {
      return NextResponse.json(
        {
          success: false,
          error: "Terlalu banyak permintaan. Silakan coba lagi dalam 10 menit.",
          retryAfter: Math.round(
            (rateLimiterRes?.msBeforeNext || 600000) / 1000
          ),
        },
        { status: 429 }
      );
    }

    // Parse request body
    const data = await request.json();

    // Validate and sanitize input
    const { errors, sanitizedData } = validateAndSanitizeInput(data);

    if (Object.keys(errors).length > 0) {
      return NextResponse.json({ success: false, errors }, { status: 400 });
    }

    // Create email transporter
    const transporter = createTransporter();

    // Send admin notification email
    const adminMailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.ADMIN_EMAIL || process.env.EMAIL_USER,
      subject: `🚀 Pesan Baru dari ${sanitizedData.name} - ${sanitizedData.projectType}`,
      html: getAdminEmailTemplate(sanitizedData),
    };

    // Send auto-reply email to user
    const userMailOptions = {
      from: process.env.EMAIL_USER,
      to: sanitizedData.email,
      subject: "Terima Kasih - HaloInfitech | Pesan Anda Telah Diterima",
      html: getAutoReplyTemplate(sanitizedData),
    };

    // Send both emails
    await Promise.all([
      transporter.sendMail(adminMailOptions),
      transporter.sendMail(userMailOptions),
    ]);

    return NextResponse.json({
      success: true,
      message:
        "Pesan berhasil dikirim. Kami akan menghubungi Anda dalam 24 jam.",
    });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Terjadi kesalahan server. Silakan coba lagi nanti.",
      },
      { status: 500 }
    );
  }
}
