import siteLogoLight from "../../public/images/site-logo-light.png";
import siteLogoDark from "../../public/images/site-logo-dark.png";
import Image from "next/image";
import Link from "next/link";

export default function SiteLogo() {
  return (
    <Link href="/">
      <Image src={siteLogoLight} alt="uifry logo" />
    </Link>
  );
}
