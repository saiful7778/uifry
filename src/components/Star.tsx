"use client";
import Image from "next/image";
import starDark from "../../public/images/star-dark.png";
import starLight from "../../public/images/star-light.png";
import cn from "@/lib/utils/cn";
import { useTheme } from "next-themes";

export default function Star({ className }: { className?: string }) {
  const { resolvedTheme } = useTheme();

  return resolvedTheme === "dark" ? (
    <Image
      className={cn("star absolute z-[-1]", className)}
      src={starDark}
      alt="star image"
    />
  ) : (
    <Image
      className={cn("star absolute z-[-1]", className)}
      src={starLight}
      alt="star image"
    />
  );
}
