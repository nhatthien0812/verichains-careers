import { cn } from "@/lib/utils";

export default function BlobBackground({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "absolute -z-50 aspect-square w-[40rem] rounded-full bg-lighter-blue opacity-50 blur-[25rem] will-change-transform lg:w-[60rem]",
        className
      )}
    />
  );
}
