import jsonData from "@/lib/data.json";
import Blob from "../Blob";
import Image from "next/image";
import HeroImage from "../../../public/images/hero-phone-image.png";
import HeroBgImage from "../../../public/images/hero-phone-bg-image.png";
import HeroElement from "../../../public/images/hero-element.png";
import star from "../../../public/images/star.png";
import Button from "../ui/button";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="relative my-4 flex flex-col justify-center md:flex-row">
      <Image
        className="star absolute left-0 top-0 z-[-1]"
        src={star}
        alt="star image"
      />
      <Image
        className="star absolute right-0 top-0 z-[-1]"
        src={star}
        alt="star image"
      />
      <div className="relative mt-20 w-full max-md:order-2 md:w-1/2">
        <Blob className="-top-5 right-56" />
        <h1 className="text-7xl font-bold">{jsonData.hero.headline}</h1>
        <p className="my-4 font-medium text-details">
          {jsonData.hero.subheadline}
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <Button asChild>
            <Link href={jsonData.hero.ctaButtons[0].link}>
              {jsonData.hero.ctaButtons[0].text}
            </Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href={jsonData.hero.ctaButtons[1].link}>
              {jsonData.hero.ctaButtons[1].text}
            </Link>
          </Button>
        </div>
        <Image
          className="star absolute bottom-1/2 left-1/3 z-[-1]"
          src={star}
          alt="star image"
        />
        <Image src={HeroElement} alt="Hero element" />
      </div>
      <div className="relative w-full max-md:order-1 md:w-2/5">
        <div className="relative">
          <Image src={HeroImage} alt="Hero image" />
          <Image
            className="absolute right-0 top-0 z-[-1]"
            src={HeroBgImage}
            alt="Hero bg image"
          />
          <Blob className="bottom-14 right-56" />
        </div>
        <Image
          className="star absolute bottom-1/2 left-0 z-[-1]"
          src={star}
          alt="star image"
        />
      </div>
    </div>
  );
}
