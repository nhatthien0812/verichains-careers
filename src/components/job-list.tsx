"use client";

import { JobCard } from "./job-card";
import { Post } from "@/lib/rss";
import { Skeleton } from "@/components/ui/skeleton";

interface JobListProps {
  posts: Post[];
  isLoading?: boolean;
}

export function JobList({ posts, isLoading }: JobListProps) {
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 6 }, (_, i) => (
          <div
            key={i}
            className="rounded-xl border border-vc-muted/20 p-6 space-y-4"
          >
            <Skeleton className="h-6 w-3/4" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
            <Skeleton className="h-4 w-4/6" />
          </div>
        ))}
      </div>
    );
  }

  if (posts.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-base leading-6 text-white">
          No job openings available at the moment.
        </p>
        <p className="text-base leading-6 text-white mt-2">
          Check back soon or subscribe to stay updated!
        </p>
      </div>
    );
  }

  const toSlug = (title: string) => title.toLowerCase().replace(/\s+/g, "-");

  return (
    <div className="grid grid-cols-1 gap-x-6 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
      {posts.map((post, index) => (
        <JobCard key={toSlug(post.title)} post={post} index={index} />
      ))}
    </div>
  );
}
