"use client";
import jsonData from "@/lib/data.json";
import Blob from "../Blob";
import Image from "next/image";
import HeroImage from "../../../public/images/hero-phone-image.png";
import phone01 from "../../../public/images/phone-image-01.png";
import phone02 from "../../../public/images/phone-image-02.png";
import HeroElement from "../../../public/images/hero-element.png";
import Button from "../ui/button";
import Link from "next/link";
import Star from "../Star";
import Ellipse from "../Ellipse";
import Tooltip from "../ui/tooltip";
import { motion } from "framer-motion";

export default function Hero() {
  const images = [phone01, phone02, phone01];

  const animation = {
    initial: { opacity: 0, first: { x: -50 }, second: { x: 50 } },
    whileInView: { opacity: 1, x: 0 },
    viewport: { amount: "some", once: true },
    transition: { duration: 1, type: "spring" },
  } as const;

  return (
    <section
      id="home"
      className="my-4 flex flex-col justify-between md:flex-row"
    >
      <motion.div
        initial={{ ...animation.initial, ...animation.initial.first }}
        whileInView={animation.whileInView}
        viewport={animation.viewport}
        transition={animation.transition}
        className="relative mt-20 w-full max-md:order-2 md:w-[55%]"
      >
        <Blob className="-top-[10%] right-[30%]" />
        <Star className="-top-[10%] left-0" />
        <Star className="bottom-1/2 left-1/3" />
        <h1 className="text-5xl font-bold md:text-6xl">
          {jsonData.hero.headline}
        </h1>
        <p className="my-4 font-medium text-details">
          {jsonData.hero.subheadline}
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <Tooltip.provider>
            <Tooltip>
              <Tooltip.trigger asChild>
                <Button asChild>
                  <Link href={jsonData.hero.ctaButtons[0].link}>
                    {jsonData.hero.ctaButtons[0].text}
                  </Link>
                </Button>
              </Tooltip.trigger>
              <Tooltip.content>
                <p>Click to get started</p>
              </Tooltip.content>
            </Tooltip>
          </Tooltip.provider>

          <Tooltip.provider>
            <Tooltip>
              <Tooltip.trigger asChild>
                <Button variant="ghost" asChild>
                  <Link href={jsonData.hero.ctaButtons[1].link}>
                    {jsonData.hero.ctaButtons[1].text}
                  </Link>
                </Button>
              </Tooltip.trigger>
              <Tooltip.content>
                <p>Click to watch new video</p>
              </Tooltip.content>
            </Tooltip>
          </Tooltip.provider>
        </div>
        <Image src={HeroElement} alt="Hero element" />
      </motion.div>
      <motion.div
        initial={{ ...animation.initial, ...animation.initial.second }}
        whileInView={animation.whileInView}
        viewport={animation.viewport}
        transition={animation.transition}
        className="relative h-[600px] w-full max-md:order-1 md:w-2/5"
      >
        <Ellipse className="-right-[20%] top-[5%]" />
        <Blob className="bottom-[20%] left-0" />
        <Star className="bottom-1/2 left-0" />
        <Star className="right-0 top-0" />
        {images.map((ele, idx) => (
          <motion.div
            key={`phone-image-${idx}`}
            initial={{
              opacity: 0,
              rotate: 0,
              right: 0,
              top: `50%`,
              y: `-50%`,
            }}
            whileInView={{
              opacity: 1,
              rotate: -15,
              right: `${idx * 25}%`,
              top: `${14 - idx * 7}%`,
              y: 0,
            }}
            viewport={{ amount: "some", once: true }}
            transition={{
              duration: 1,
              type: "spring",
              delay: idx * 0.4,
            }}
            className={`absolute z-[${idx + 1}] h-[302.4px] w-[150px] md:h-[403px] md:w-[200px]`}
          >
            <Image src={ele.src} fill alt={`phone ${idx + 1} image`} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
