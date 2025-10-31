import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getSubstackPosts } from "@/lib/rss";
import { listJobs } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Briefcase, Calendar, Mail } from "lucide-react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

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

  const email = post.link.startsWith("mailto:")
    ? post.link.replace(/^mailto:/, "")
    : post.link;

  return (
    <div className="min-h-screen bg-linear-to-b from-vc-surface/5 to-transparent py-12 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-5xl">
        {/* Back Button */}
        <Link
          href="/#jobs"
          className="inline-flex items-center text-sm font-medium text-vc-muted hover:text-light-blue transition-colors mb-8 group"
        >
          <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
          Back to Jobs
        </Link>

        {/* Job Header Card */}
        <Card className="mb-6 border-vc-muted/20 bg-linear-to-br from-vc-surface/40 to-vc-surface/20 backdrop-blur-sm">
          <CardHeader className="pb-4">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-light-blue/10 border border-light-blue/30">
                <Briefcase className="h-6 w-6 text-light-blue" />
              </div>
              <div className="flex-1">
                <CardTitle className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 leading-tight">
                  {post.title}
                </CardTitle>
                <div className="flex flex-wrap gap-4 text-sm text-vc-muted">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>Posted on {formatDate(post.pubDate)}</span>
                  </div>
                </div>
              </div>
            </div>
          </CardHeader>
        </Card>

        {/* Job Description Card */}
        <Card className="border-vc-muted/20 bg-vc-surface/30 backdrop-blur-sm">
          <CardContent className="pt-8 pb-8">
            {/* Job Summary */}
            <div className="mb-8 p-6 rounded-lg bg-linear-to-br from-light-blue/10 to-light-blue/5 border border-light-blue/20">
              <p className="text-base md:text-lg leading-relaxed text-white font-medium">
                {post.contentSnippet}
              </p>
            </div>

            {/* Markdown Content */}
            <div className="prose prose-invert prose-lg max-w-none">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                  h1: ({ children }) => (
                    <h1 className="text-3xl font-bold text-white mt-8 mb-4 pb-3 border-b border-light-blue/30">
                      {children}
                    </h1>
                  ),
                  h2: ({ children }) => (
                    <h2 className="text-2xl font-bold text-light-blue mt-8 mb-4">
                      {children}
                    </h2>
                  ),
                  h3: ({ children }) => (
                    <h3 className="text-xl font-semibold text-white mt-6 mb-3">
                      {children}
                    </h3>
                  ),
                  p: ({ children }) => (
                    <p className="text-base leading-7 text-white/90 mb-4">
                      {children}
                    </p>
                  ),
                  ul: ({ children }) => (
                    <ul className="space-y-3 mb-6 ml-4">{children}</ul>
                  ),
                  ol: ({ children }) => (
                    <ol className="space-y-3 mb-6 ml-4 list-decimal">
                      {children}
                    </ol>
                  ),
                  li: ({ children }) => (
                    <li className="text-base leading-7 text-white/90 pl-2 flex gap-3">
                      <span className="text-light-blue shrink-0 leading-7">
                        •
                      </span>
                      <span className="flex-1">{children}</span>
                    </li>
                  ),
                  strong: ({ children }) => (
                    <strong className="font-bold text-white">{children}</strong>
                  ),
                  em: ({ children }) => (
                    <em className="italic text-light-blue/90">{children}</em>
                  ),
                  blockquote: ({ children }) => (
                    <blockquote className="border-l-4 border-light-blue pl-4 py-2 my-4 bg-light-blue/5 rounded-r">
                      {children}
                    </blockquote>
                  ),
                  code: ({ children }) => (
                    <code className="px-2 py-1 rounded bg-vc-muted/20 text-light-blue text-sm font-mono">
                      {children}
                    </code>
                  ),
                  a: ({ href, children }) => (
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-light-blue hover:text-light-blue/80 underline transition-colors"
                    >
                      {children}
                    </a>
                  ),
                }}
              >
                {post.content || post.contentSnippet}
              </ReactMarkdown>
            </div>

            {/* Contact Section */}
            <div className="mt-12 pt-8 border-t border-vc-muted/20">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 p-6 rounded-lg bg-linear-to-br from-light-blue/10 to-light-blue/5 border border-light-blue/20">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
                    <Mail className="h-5 w-5 text-light-blue" />
                    Interested in this position?
                  </h3>
                  <p className="text-sm text-vc-muted">
                    Send your CV and information to the email below
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="px-5 py-3 rounded-lg bg-light-blue/20 border border-light-blue/40">
                    <a
                      href={post.link}
                      className="text-light-blue font-semibold hover:text-white transition-colors"
                    >
                      {email}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Footer Navigation */}
        <div className="mt-10 text-center">
          <Link
            href="/#jobs"
            className="inline-flex items-center gap-2 text-base text-vc-muted hover:text-light-blue transition-colors font-medium group"
          >
            <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            View all open positions
          </Link>
        </div>
      </div>
    </div>
  );
}
