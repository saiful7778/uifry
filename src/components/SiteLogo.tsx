"use client";
import siteLogoLight from "../../public/images/site-logo-light.png";
import siteLogoDark from "../../public/images/site-logo-dark.png";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";

export default function SiteLogo() {
  const { resolvedTheme } = useTheme();

  return (
    <Link href="/">
      {resolvedTheme === "dark" ? (
        <Image src={siteLogoDark} alt="uifry logo" />
      ) : (
        <Image src={siteLogoLight} alt="uifry logo" />
      )}
    </Link>
  );
}
