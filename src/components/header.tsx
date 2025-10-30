"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { VerichainsLogo } from "@/components/verichains-logo";
import { VerichainsLogoIcon } from "@/components/verichains-logo-icon";
import { siteConfig } from "@/config/site";
import { ChevronRight, Menu } from "lucide-react";

export function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/jobs", label: "Jobs" },
    { href: "/about", label: "About" },
    { href: "/subscribe", label: "Subscribe" },
  ];

  // Check if current path matches item (including /jobs/[slug])
  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname?.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-[99] bg-deep-dark/70 py-3 text-[12px] leading-[18px] text-white backdrop-blur-sm">
      <div className="relative mx-auto flex max-w-[1366px] items-center text-white xl:px-36">
        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="xl:hidden text-white z-[999] ml-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <Menu className="h-6 w-6" />
        </Button>

        {/* Logo */}
        <Link href="/" className="mr-auto block">
          <VerichainsLogo height={32} className="max-xl:hidden" />
          <div className="xl:hidden flex items-center space-x-2">
            <VerichainsLogoIcon size={24} className="h-6 w-6" />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <ul className="inline-flex h-10 items-center gap-x-8 max-xl:hidden">
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
          <li>
            <Button
              asChild
              variant="default"
              size="sm"
              showChevron={false}
              className="h-10"
            >
              <Link
                href={siteConfig.links.substack}
                target="_blank"
                className="inline-flex items-center justify-center"
              >
                View Jobs
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </li>
        </ul>
      </div>
    </header>
  );
}
