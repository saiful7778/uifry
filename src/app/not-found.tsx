import Button from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export default function Notfound() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center gap-4 text-center">
      <h1 className="text-9xl font-bold">
        Oops<span className="text-primary">!</span>
      </h1>
      <h3 className="text-xl font-semibold uppercase">404 - Page not round</h3>
      <p className="text-details">
        the page you are looking for might have been removed <br />
        had it{`'`}s name changed or is temporarily unavailable.
      </p>
      <Button asChild>
        <Link href="/">Go to homepage</Link>
      </Button>
    </div>
  );
}
