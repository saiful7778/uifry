"use client";
import Image from "next/image";
import starDark from "../../public/images/star-dark.png";
import starLight from "../../public/images/star-light.png";
import cn from "@/lib/utils/cn";
import { useTheme } from "next-themes";

export default function Star({ className }: { className?: string }) {
  const { resolvedTheme } = useTheme();

  const randomNumber = Math.floor(Math.random() * 10) + 1;

  return (
    <>
      <div
        className={cn(
          "absolute z-[-1]",
          randomNumber < 5 ? "star-reverse" : "star",
          className,
        )}
      >
        {resolvedTheme === "dark" ? (
          <Image src={starDark} alt="star image" />
        ) : (
          <Image src={starLight} alt="star image" />
        )}
      </div>
    </>
  );
}
