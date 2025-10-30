import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getSubstackPosts } from "@/lib/rss";
import { listJobs } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, ExternalLink } from "lucide-react";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export const revalidate = 60;

async function getPosts() {
  try {
    const posts = await getSubstackPosts(50);
    return posts.length > 0 ? posts : listJobs;
  } catch {
    return listJobs;
  }
}

function getPostBySlug(posts: typeof listJobs, slug: string) {
  // Try to find post by matching slug in the link
  const post = posts.find((p) => {
    const postSlug = p.link.split("/").pop() || "";
    const titleSlug = p.title.toLowerCase().replace(/\s+/g, "-");
    return (
      postSlug === slug ||
      titleSlug === slug ||
      decodeURIComponent(postSlug) === slug
    );
  });
  return post;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const posts = await getPosts();
  const post = getPostBySlug(posts, slug);

  if (!post) {
    return {
      title: "Job Not Found",
    };
  }

  return {
    title: post.title,
    description: post.contentSnippet,
    openGraph: {
      title: post.title,
      description: post.contentSnippet,
      url: `${siteConfig.url}/jobs/${slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.contentSnippet,
    },
  };
}

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((post) => {
    const slug =
      post.link.split("/").pop() ||
      post.title.toLowerCase().replace(/\s+/g, "-");
    return {
      slug: encodeURIComponent(slug),
    };
  });
}

export default async function JobDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const posts = await getPosts();
  const post = getPostBySlug(posts, decodeURIComponent(slug));

  if (!post) {
    notFound();
  }

  const formatDate = (dateString: string) => {
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      });
    } catch {
      return "Recently";
    }
  };

  return (
    <div className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <Link
          href="/jobs"
          className="inline-flex items-center text-base leading-6 text-vc-muted hover:text-white transition-colors mb-8"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Jobs
        </Link>

        <Card>
          <CardHeader>
            <div className="flex items-start justify-between gap-4 mb-4">
              <CardTitle className="text-heading font-bold">
                {post.title}
              </CardTitle>
            </div>
            <p className="text-base leading-6 text-white">
              Posted on {formatDate(post.pubDate)}
            </p>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="prose prose-invert max-w-none">
              <p className="text-base leading-6 text-white">
                {post.contentSnippet}
              </p>
            </div>

            <div className="pt-6 border-t border-vc-muted/20">
              <p className="text-base leading-6 text-white mb-4">
                For full job details and to apply, please visit our Substack
                post:
              </p>
              <Button
                asChild
                variant="gradient"
                size="lg"
                className="w-full sm:w-auto"
              >
                <a href={post.link} target="_blank" rel="noopener noreferrer">
                  View Full Job Posting on Substack
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="mt-8 text-center">
          <Link
            href="/jobs"
            className="text-base leading-6 text-vc-muted hover:text-white transition-colors"
          >
            ← View all job openings
          </Link>
        </div>
      </div>
    </div>
  );
}
