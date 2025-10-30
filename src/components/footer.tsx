import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Separator } from "@/components/ui/separator";
import { VerichainsLogo } from "@/components/verichains-logo";
import { Linkedin, Twitter, Facebook, Send } from "lucide-react";

export function Footer() {
  const socialLinks = [
    { icon: Linkedin, href: siteConfig.links.linkedin, label: "LinkedIn" },
    { icon: Twitter, href: siteConfig.links.twitter, label: "Twitter" },
    { icon: Facebook, href: siteConfig.links.facebook, label: "Facebook" },
    { icon: Send, href: siteConfig.links.telegram, label: "Telegram" },
  ];

  return (
    <footer className="border-t border-vc-muted/20 bg-vc-surface/30 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div>
              <VerichainsLogo height={40} showText={true} className="!block" />
            </div>
            <p className="text-base leading-6 text-white">
              Asia&apos;s leading blockchain security firm. Building the future
              of secure Web3 infrastructure.
            </p>
          </div>

          {/* Offices */}
          <div className="space-y-4">
            <h3 className="text-heading2 font-bold text-white">Offices</h3>
            <div className="space-y-3">
              <div>
                <p className="text-base leading-6 font-medium text-white">
                  {siteConfig.offices.vietnam.name}
                </p>
                <p className="text-base leading-6 text-white">
                  {siteConfig.offices.vietnam.address}
                </p>
              </div>
              <Separator />
              <div>
                <p className="text-base leading-6 font-medium text-white">
                  {siteConfig.offices.singapore.name}
                </p>
                <p className="text-base leading-6 text-white">
                  {siteConfig.offices.singapore.address}
                </p>
              </div>
            </div>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <h3 className="text-heading2 font-bold text-white">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link
                href="/"
                className="text-base leading-6 text-vc-muted hover:text-white transition-colors"
              >
                Home
              </Link>
              <Link
                href="/jobs"
                className="text-base leading-6 text-vc-muted hover:text-white transition-colors"
              >
                Jobs
              </Link>
              <Link
                href="/about"
                className="text-base leading-6 text-vc-muted hover:text-white transition-colors"
              >
                About
              </Link>
              <Link
                href="/subscribe"
                className="text-base leading-6 text-vc-muted hover:text-white transition-colors"
              >
                Subscribe
              </Link>
            </nav>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <h3 className="text-heading2 font-bold text-white">Follow Us</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-vc-muted/20 transition-colors"
                    aria-label={social.label}
                  >
                    <Icon className="h-5 w-5 text-vc-muted hover:text-white transition-colors" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-base leading-6 text-white">
            © {new Date().getFullYear()}{" "}
            <span className="text-light-blue">Verichains</span>. All rights
            reserved.
          </p>
          <Link
            href={siteConfig.links.substack}
            target="_blank"
            className="text-base leading-6 text-vc-muted hover:text-white transition-colors"
          >
            View all opportunities on Substack →
          </Link>
        </div>
      </div>
    </footer>
  );
}
