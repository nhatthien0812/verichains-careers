import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center px-4 sm:px-6 lg:px-8">
      <Card className="max-w-md w-full text-center">
        <CardContent className="p-8 space-y-6">
          <div className="space-y-2">
            <h1 className="text-heading font-bold text-vc-primary">404</h1>
            <h2 className="text-heading2 font-bold">Page Not Found</h2>
            <p className="text-base leading-6 text-white">
              The page you&apos;re looking for doesn&apos;t exist or has been
              moved.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="gradient">
              <Link href="/">Go Home</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/jobs">View Jobs</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
