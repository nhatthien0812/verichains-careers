import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getSubstackPosts } from "@/lib/rss";
import { listJobs } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
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

function toSlug(title: string) {
  return title.toLowerCase().replace(/\s+/g, "-");
}

function getPostBySlug(posts: typeof listJobs, slug: string) {
  const post = posts.find((p) => toSlug(p.title) === slug);
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
    const slug = toSlug(post.title);
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

  const paragraphs = (post.content || post.contentSnippet)
    .split(/\n\n+/)
    .map((p) => p.trim())
    .filter(Boolean);

  const email = post.link.startsWith("mailto:")
    ? post.link.replace(/^mailto:/, "")
    : post.link;

  return (
    <div className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <Link
          href="/#jobs"
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
            <div className="prose prose-invert max-w-none space-y-4">
              {paragraphs.map((para, idx) => (
                <p
                  key={idx}
                  className="text-base leading-6 text-white whitespace-pre-line"
                >
                  {para}
                </p>
              ))}
            </div>

            <div className="pt-6 border-t border-vc-muted/20">
              <p className="text-base leading-6 text-white mb-3">
                Contact email
              </p>
              <div className="inline-flex items-center rounded-md border border-light-blue/40 bg-light-blue/10 px-4 py-2 text-light-blue font-medium">
                {email}
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="mt-8 text-center">
          <Link
            href="/#jobs"
            className="text-base leading-6 text-vc-muted hover:text-white transition-colors"
          >
            ← View all job openings
          </Link>
        </div>
      </div>
    </div>
  );
}
