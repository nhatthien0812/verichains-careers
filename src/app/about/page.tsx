import { Metadata } from "next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Verichains&apos; mission, values, and commitment to blockchain security excellence.",
};

export default function AboutPage() {
  return (
    <div className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12 space-y-4">
          <h1 className="text-heading font-bold">
            About <span className="text-light-blue">Verichains</span>
          </h1>
          <p className="text-base leading-6 text-white max-w-2xl mx-auto">
            Asia's leading blockchain security firm, dedicated to securing the
            future of Web3
          </p>
        </div>

        <div className="space-y-8">
          {/* Mission */}
          <Card>
            <CardHeader>
              <CardTitle className="text-heading font-bold">
                Our Mission
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-base leading-6 text-white">
                <span className="text-light-blue">Verichains</span> is committed
                to building a more secure and trustworthy Web3 ecosystem. We
                provide comprehensive security solutions including smart
                contract audits, security research, and cutting-edge tools that
                protect billions of dollars in digital assets.
              </p>
              <p className="text-base leading-6 text-white">
                Our mission is to establish the highest standards in blockchain
                security and to serve as a trusted partner for DeFi protocols,
                NFT platforms, and Web3 infrastructure projects across Asia and
                beyond.
              </p>
            </CardContent>
          </Card>

          {/* Values */}
          <Card>
            <CardHeader>
              <CardTitle className="text-heading font-bold">
                Our Values
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Security First",
                    description:
                      "We prioritize security above all else. Every audit, every tool, and every decision is made with security in mind.",
                  },
                  {
                    title: "Innovation",
                    description:
                      "We continuously push the boundaries of security research and develop state-of-the-art tools and methodologies.",
                  },
                  {
                    title: "Excellence",
                    description:
                      "We maintain the highest standards in our work and strive for perfection in every project we undertake.",
                  },
                  {
                    title: "Collaboration",
                    description:
                      "We believe in the power of teamwork and work closely with our clients and the broader Web3 community.",
                  },
                ].map((value, index) => (
                  <div key={index} className="space-y-2">
                    <h3 className="text-heading2 font-bold text-white">
                      {value.title}
                    </h3>
                    <p className="text-base leading-6 text-white">
                      {value.description}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Culture */}
          <Card>
            <CardHeader>
              <CardTitle className="text-heading font-bold">
                Our Culture
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-base leading-6 text-white">
                At <span className="text-light-blue">Verichains</span>, we
                foster a culture of continuous learning and growth. Our team
                consists of world-class security researchers, blockchain
                engineers, and technology experts who are passionate about
                securing the Web3 ecosystem.
              </p>
              <p className="text-base leading-6 text-white">
                We value diversity, creativity, and intellectual curiosity. We
                encourage our team members to explore new ideas, contribute to
                open-source projects, and share knowledge with the community.
              </p>
              <p className="text-base leading-6 text-white">
                As a remote-friendly company with offices in Vietnam and
                Singapore, we support flexible work arrangements and provide our
                team with the resources they need to do their best work.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
