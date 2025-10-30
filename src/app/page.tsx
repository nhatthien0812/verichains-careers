import { IntroSection } from "@/components/intro-section";
import { JobList } from "@/components/job-list";
import { SubscribeCta } from "@/components/subscribe-cta";
import { Button } from "@/components/ui/button";
import { listJobs } from "@/lib/data";
import { getSubstackPosts } from "@/lib/rss";
import { ArrowRight } from "lucide-react";
import { Suspense } from "react";

async function getPosts() {
  try {
    const posts = await getSubstackPosts(6);
    return posts.length > 0 ? posts : listJobs;
  } catch {
    return listJobs;
  }
}

export default async function Home() {
  const posts = await getPosts();

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section
        className="relative overflow-hidden py-20 lg:py-32 px-4 sm:px-6 lg:px-8"
        style={{
          backgroundImage:
            "url(https://verichains.io/_next/static/media/0.04701e1b.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-heading font-bold tracking-tight">
              Join
              <div className="block mt-2 text-light-blue">
                Blockchain Security Team
              </div>
            </h1>
            <p className="text-base leading-6 font-normal text-white max-w-2xl mx-auto">
              Build the future of secure Web3 infrastructure with{" "}
              <span className="text-light-blue">Verichains</span>. We&apos;re
              hiring talented security researchers, engineers, and blockchain
              experts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button asChild variant="default" size="lg" showChevron={false}>
                <a
                  href="/jobs"
                  className="inline-flex items-center justify-center"
                >
                  View Open Positions
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Jobs Section */}
      <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="mb-12 text-center">
            <h2 className="text-heading font-bold mb-4">
              Open <span className="text-light-blue"> Positions</span>
            </h2>
            <p className="text-base leading-6 text-white">
              Explore our current openings and find your next opportunity
            </p>
          </div>
          <Suspense fallback={<JobList isLoading={true} posts={[]} />}>
            <JobList posts={posts} />
          </Suspense>
        </div>
      </section>

      <IntroSection />
    </div>
  );
}
