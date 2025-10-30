"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/config/site";

export function SubscribeCta() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Card className="border-vc-primary/20 bg-linear-to-br from-vc-primary/5 to-vc-accent/5 card-glass">
        <CardContent className="p-8 lg:p-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="flex-1 text-center lg:text-left">
              <h2 className="text-heading font-bold mb-2">
                Stay Updated on New Opportunities
              </h2>
              <p className="text-base leading-6 text-white">
                Subscribe to our Substack newsletter to get notified about new
                job openings and company updates.
              </p>
            </div>
            <Button
              asChild
              variant="default"
              size="lg"
              className="whitespace-nowrap"
              showChevron={false}
            >
              <a
                href={siteConfig.links.substack}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center"
              >
                Subscribe on Substack
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
