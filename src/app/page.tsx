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
              Join{" "}
              <span className="mt-2 text-light-blue">
                Global Leading Security
              </span>{" "}
              institutions
            </h1>
            <p className="text-base leading-6 font-normal text-white max-w-2xl mx-auto">
              We are expanding rapidly and seeking talented individuals
              passionate about technology, security, and mobile solutions to
              join us in writing the next chapter of our &apos;Go Global&apos;
              journey.
            </p>
          </div>
        </div>
      </section>

      {/* Jobs Section */}
      <section
        id="jobs"
        className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 scroll-mt-20"
      >
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
