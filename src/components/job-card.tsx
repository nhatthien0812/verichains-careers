"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import { Post } from "@/lib/rss";

interface JobCardProps {
  post: Post;
  index: number;
}

export function JobCard({ post, index }: JobCardProps) {
  const formatDate = (dateString: string) => {
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      });
    } catch {
      return "Recently";
    }
  };

  const jobSlug = `/jobs/${encodeURIComponent(
    post.link.split("/").pop() || post.title.toLowerCase().replace(/\s+/g, "-")
  )}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="relative group"
    >
      {/* Glow effect */}
      <div className="absolute inset-0 z-[-1] rounded-lg bg-lighter-blue opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-100" />

      <Link href={jobSlug}>
        <Card className="cursor-pointer rounded-lg border border-white! bg-deep-dark p-4 text-white transition-all duration-300 hover:border-[#008be7] hover:bg-[#001e32] h-full flex flex-col shadow-none backdrop-blur-none">
          <CardHeader className="relative pr-24">
            <p className="text-heading2 font-bold group-hover:text-light-blue transition-colors">
              {post.title}
            </p>
            <Badge
              variant="secondary"
              className="absolute top-0 right-0 bg-vc-surface text-vc-muted border-vc-muted/30"
            >
              {formatDate(post.pubDate)}
            </Badge>
          </CardHeader>
          <CardContent className="flex-1 flex flex-col">
            <CardDescription className="text-base leading-6 text-white line-clamp-3 mb-4">
              {post.contentSnippet}
            </CardDescription>
            <div className="inline-flex items-center text-sm font-medium text-light-blue mt-auto group/link">
              View Details
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </div>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );
}
