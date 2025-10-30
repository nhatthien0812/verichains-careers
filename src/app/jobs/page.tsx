import { Metadata } from "next";
import { getSubstackPosts } from "@/lib/rss";
import { listJobs } from "@/lib/data";
import { JobList } from "@/components/job-list";
import { SubscribeCta } from "@/components/subscribe-cta";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Job Openings",
  description:
    "Browse all current job openings at Verichains. Join our team of security researchers and blockchain experts.",
};

async function getPosts() {
  try {
    const posts = await getSubstackPosts(12);
    return posts.length > 0 ? posts : listJobs;
  } catch {
    return listJobs;
  }
}

export default async function JobsPage() {
  const posts = await getPosts();

  return (
    <div className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <h1 className="text-heading font-bold mb-4">
            Current <span className="text-light-blue">Openings</span>
          </h1>
          <p className="text-base leading-6 text-white max-w-2xl mx-auto">
            Explore all available positions and find the perfect role for you
          </p>
        </div>

        <JobList posts={posts} />

        <div className="mt-16">
          <SubscribeCta />
        </div>
      </div>
    </div>
  );
}
