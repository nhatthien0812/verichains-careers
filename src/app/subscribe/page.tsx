import { Metadata } from "next";
import { SubscribeCta } from "@/components/subscribe-cta";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Subscribe",
  description:
    "Subscribe to Verichains Substack newsletter to stay updated on new job openings and company updates.",
};

export default function SubscribePage() {
  const benefits = [
    "Get notified about new job openings first",
    "Stay updated on company news and updates",
    "Learn about our security research and findings",
    "Join our community of security professionals",
  ];

  return (
    <div className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12 space-y-4">
          <h1 className="text-heading font-bold">Stay Connected</h1>
          <p className="text-base leading-6 text-white max-w-2xl mx-auto">
            Subscribe to our Substack newsletter to get the latest updates on
            job opportunities, company news, and security research.
          </p>
        </div>

        <div className="space-y-8">
          <SubscribeCta />

          <Card>
            <CardHeader>
              <CardTitle className="text-heading font-bold">
                What You&apos;ll Get
              </CardTitle>
              <CardDescription className="text-base leading-6 text-white">
                Join our community and stay informed about opportunities at{" "}
                <span className="text-light-blue">Verichains</span>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-vc-accent mt-0.5 shrink-0" />
                    <span className="text-base leading-6 text-white">
                      {benefit}
                    </span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="border-vc-muted/20 bg-vc-surface/20 card-glass">
            <CardContent className="p-8 text-center">
              <h3 className="text-heading font-bold mb-3">
                Ready to Join Our Team?
              </h3>
              <p className="text-base leading-6 text-white mb-6">
                View all our current job openings on Substack or check out our
                job listings page.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild variant="gradient" size="lg">
                  <a
                    href={siteConfig.links.substack}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View All Jobs on Substack
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href="/jobs">Browse Job Listings</a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
