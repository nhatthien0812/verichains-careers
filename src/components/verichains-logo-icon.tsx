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
    <img
      src="/favicon.ico"
      width={size}
      height={size}
      alt="Verichains logo"
      className={className}
    />
  );
}
