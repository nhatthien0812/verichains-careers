import React from "react";
import Image from "next/image";

interface LogoIconProps {
  className?: string;
  size?: number;
}

export function VerichainsLogoIcon({
  className = "",
  size = 32,
}: LogoIconProps) {
  return (
    <Image
      src="/favicon.ico"
      width={size}
      height={size}
      alt="Verichains logo"
      className={className}
    />
  );
}
