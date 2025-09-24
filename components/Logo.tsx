import Image from "next/image";

interface LogoProps {
  variant?: "light" | "dark";
  size?: "sm" | "md" | "lg";
  showPulse?: boolean;
}

export default function Logo({
  variant = "light",
  size = "md",
  showPulse = true,
}: LogoProps) {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "w-16 h-16",
  };

  const textClasses = {
    light: {
      title: "text-gray-900",
      subtitle: "text-gray-500",
    },
    dark: {
      title: "text-white",
      subtitle: "text-gray-400",
    },
  };

  const titleSize = {
    sm: "text-lg",
    md: "text-2xl",
    lg: "text-3xl",
  };

  const subtitleSize = {
    sm: "text-xs",
    md: "text-sm",
    lg: "text-base",
  };

  return (
    <div className="flex items-center space-x-3">
      <div className="relative">
        <div
          className={`${sizeClasses[size]} rounded-lg overflow-hidden shadow-lg`}
        >
          <Image
            src="/images/logo.jpg"
            alt="HaloInfitech Logo"
            width={size === "sm" ? 32 : size === "md" ? 48 : 64}
            height={size === "sm" ? 32 : size === "md" ? 48 : 64}
            className="w-full h-full object-cover"
            priority
          />
        </div>
        {showPulse && (
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-blue-400 rounded-full animate-pulse"></div>
        )}
      </div>
      <div>
        <h2
          className={`${titleSize[size]} font-bold ${textClasses[variant].title}`}
        >
          HaloInfitech
        </h2>
        <p
          className={`${subtitleSize[size]} ${textClasses[variant].subtitle} font-medium`}
        >
          Infinity Technology
        </p>
      </div>
    </div>
  );
}
