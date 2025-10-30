import React from "react";

interface LogoIconProps {
  className?: string;
  size?: number;
}

export function VerichainsLogoIcon({
  className = "",
  size = 32,
}: LogoIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: "#0E76FD", stopOpacity: 1 }} />
          <stop
            offset="100%"
            style={{ stopColor: "#22C55E", stopOpacity: 1 }}
          />
        </linearGradient>
      </defs>

      {/* Background circle */}
      <circle
        cx="16"
        cy="16"
        r="14"
        fill="url(#logoGradient)"
        stroke="#ffffff"
        strokeWidth="1"
        opacity="0.1"
      />

      {/* Verichains "W" logo */}
      <path
        d="M8 8 L10 12 L12 8 L14 12 L16 8 L18 12 L20 8 L22 12 L24 8"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />

      {/* Small blue accent square */}
      <rect x="6" y="6" width="3" height="3" fill="#0E76FD" rx="0.5" />
    </svg>
  );
}
