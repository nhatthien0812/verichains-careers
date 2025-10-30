import { Metadata } from "next";
import { Card } from "@/components/ui/card";
import { Shield, Globe, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Verichains - global leader in security solutions for traditional banking and DeFi/Web3.",
};

export default function AboutPage() {
  const highlights = [
    { icon: Shield, label: "Since 2017" },
    { icon: Globe, label: "200+ Global Clients" },
    { icon: Award, label: "Largest Web3 Incident Response" },
  ];

  return (
    <div className="relative py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-5xl">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-heading font-bold mb-4">
            About <span className="text-light-blue">Verichains</span>
          </h1>
        </div>

        {/* Highlights Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <Card
                key={idx}
                className="p-6 text-center border-vc-muted/20 bg-vc-surface/20 hover:bg-vc-surface/30 transition-colors"
              >
                <div className="flex justify-center mb-3">
                  <div className="p-3 rounded-lg bg-light-blue/10">
                    <Icon className="h-6 w-6 text-light-blue" />
                  </div>
                </div>
                <p className="text-base font-medium text-white">{item.label}</p>
              </Card>
            );
          })}
        </div>

        {/* Main Content */}
        <Card className="p-8 lg:p-12 border-vc-muted/20 bg-linear-to-br from-vc-surface/20 to-vc-surface/5 backdrop-blur-sm">
          <div className="space-y-6 text-base leading-7 text-white">
            <p>
              Verichains is a global leader in security solutions for both
              traditional banking and finance as well as decentralized
              DeFi/Web3. Since 2017, Verichains has combined deep expertise in
              traditional security and blockchain technology to deliver
              cutting-edge solutions to over 200 global clients, including{" "}
              <span className="text-light-blue font-medium">
                Binance, Bullish, Bybit, Galaxy, Polygon, BNB Chain, Aptos, Sui,
                Kakao, Line Corp, Abu Dhabi Blockchain Center
              </span>{" "}
              as well as banks and financial institutions.
            </p>
            <p className="pt-4 border-t border-vc-muted/20">
              We're also proud to be the only firm that had led incident
              response for the largest Web3 hacks in history{" "}
              <span className="text-light-blue font-medium">
                (Bybit, Binance/BNB, Ronin Network)
              </span>
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
}
