"use client";
import Button from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  console.error(error);
  return (
    <div className="flex w-full flex-col items-center justify-center gap-4 p-4 text-center">
      <h1 className="text-4xl font-bold">
        Something wentd wrong<span className="text-primary">!</span>
      </h1>
      <p>{error.message}</p>
      <Button onClick={reset}>Try again</Button>
    </div>
  );
}
