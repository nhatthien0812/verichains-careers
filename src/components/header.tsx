"use client";

import { VerichainsLogo } from "@/components/verichains-logo";
import { VerichainsLogoIcon } from "@/components/verichains-logo-icon";
import Link from "next/link";

export function Header() {
  return (
    <header className="sticky top-0 z-99 bg-deep-dark/70 py-3 text-[12px] leading-[18px] text-white backdrop-blur-sm">
      <div className="relative mx-auto flex max-w-[1366px] items-center text-white xl:px-36 px-4">
        {/* Logo */}
        <Link href="/" className="mr-auto block max-md:mb-3">
          <div className="max-xl:hidden">
            <VerichainsLogo height={28} className="md:h-8 lg:h-9" />
          </div>
          <div className="xl:hidden flex items-center">
            <VerichainsLogoIcon size={24} className="h-6 w-6" />
          </div>
        </Link>
      </div>
    </header>
  );
}
