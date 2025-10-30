"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { VerichainsLogo } from "@/components/verichains-logo";
import { VerichainsLogoIcon } from "@/components/verichains-logo-icon";
import { ChevronRight, Menu, X } from "lucide-react";

export function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/jobs", label: "Jobs" },
    { href: "/about", label: "About" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname?.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-99 bg-deep-dark/70 py-3 text-[12px] leading-[18px] text-white backdrop-blur-sm">
      <div className="relative mx-auto flex max-w-[1366px] items-center text-white xl:px-36 px-4">
        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="xl:hidden text-white mr-2 max-md:mb-3"
          onClick={() => setIsMobileMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </Button>

        {/* Logo */}
        <Link href="/" className="mr-auto block max-md:mb-3">
          <div className="max-xl:hidden">
            <VerichainsLogo height={28} className="md:h-8 lg:h-9" />
          </div>
          <div className="xl:hidden flex items-center">
            <VerichainsLogoIcon size={24} className="h-6 w-6" />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <ul className="inline-flex w-10 h-10 items-center gap-x-8 max-xl:hidden">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`group relative cursor-pointer select-none text-white after:absolute after:-bottom-1 after:block after:h-[2px] after:w-0 after:bg-light-blue after:transition-[width] after:duration-200 after:content-[''] hover:no-underline ${
                  isActive(item.href) ? "after:w-full" : "hover:after:w-full"
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Navigation Panel */}
      {isMobileMenuOpen && (
        <div className="xl:hidden bg-deep-dark/95 border-t border-vc-muted/20 ">
          <nav className="px-4 py-3 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block py-3 text-white ${
                  isActive(item.href) ? "text-light-blue" : ""
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/jobs"
              className="block py-3 text-light-blue font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              View Jobs
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
