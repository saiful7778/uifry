import jsonData from "@/lib/data.json";
import Blob from "../Blob";
import Image from "next/image";
import HeroImage from "../../../public/images/hero-phone-image.png";
import HeroElement from "../../../public/images/hero-element.png";
import Button from "../ui/button";
import Link from "next/link";
import Star from "../Star";
import Ellipse from "../Ellipse";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative my-4 flex flex-col justify-between md:flex-row"
    >
      <Star className="left-0 top-0" />
      <Star className="right-0 top-0" />
      <div className="relative mt-20 w-full max-md:order-2 md:w-[55%]">
        <Blob className="-top-5 right-56" />
        <h1 className="text-6xl font-bold">{jsonData.hero.headline}</h1>
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
        <Star className="bottom-1/2 left-1/3" />
        <Image src={HeroElement} alt="Hero element" />
      </div>
      <div className="relative w-full max-md:order-1 md:w-2/5">
        <div className="relative">
          <Image src={HeroImage} alt="Hero image" />
          <Ellipse className="top-[8%]" />
          <Blob className="bottom-14 right-56" />
        </div>
        <Star className="bottom-1/2 left-0" />
      </div>
    </section>
  );
}
