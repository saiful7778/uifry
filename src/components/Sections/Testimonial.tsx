"use client";
import cn from "@/lib/utils/cn";
import Blob from "../Blob";
import Ellipse from "../Ellipse";
import jsonData from "@/lib/data.json";
import Image from "next/image";
import { MessageSquareQuote } from "lucide-react";
import ClientReview from "../ClientReview";
import { motion } from "framer-motion";

export default function Testimonial() {
  const animation = {
    initial: { opacity: 0, first: { x: -50 }, second: { x: 50 } },
    whileInView: { opacity: 1, x: 0 },
    viewport: { amount: "some", once: true },
    transition: { duration: 1, type: "spring" },
  } as const;

  return (
    <section className="my-16">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={animation.viewport}
        transition={animation.transition}
        className="mx-auto w-full max-w-md text-center"
      >
        <div className="text-lg uppercase text-primary">Testimonial</div>
        <h2 className="!mb-6 text-5xl font-bold">
          What our users say about us?
        </h2>
      </motion.div>
      <div className="relative my-16 flex flex-col justify-between gap-4 md:flex-row">
        <motion.div
          initial={{ ...animation.initial, ...animation.initial.first }}
          whileInView={animation.whileInView}
          viewport={animation.viewport}
          transition={animation.transition}
          className="relative flex w-full justify-center md:w-2/5"
        >
          <ClientImagesSection />
          <Ellipse className="top-[5%]" />
          <Blob className="bottom-[30%] left-0" />
        </motion.div>
        <motion.div
          initial={{ ...animation.initial, ...animation.initial.second }}
          whileInView={animation.whileInView}
          viewport={animation.viewport}
          transition={animation.transition}
          className="relative w-full space-y-3 md:w-1/2"
        >
          <h2 className="!mb-6 text-3xl font-semibold">
            The best financial accounting app ever!
          </h2>
          <Blob className="right-0 top-0" />
          <ClientReview />
        </motion.div>
      </div>
    </section>
  );
}

function ClientImagesSection() {
  const clientClass = (idx: number) => {
    switch (idx) {
      case 0:
        return "left-0 top-0";
      case 1:
        return "right-0 top-0";
      case 3:
        return "left-0 bottom-0";
      case 4:
        return "right-0 bottom-0";
    }
  };

  return (
    <div className="relative mr-auto h-[400px] w-full max-w-sm">
      {jsonData.testimonials.map((ele, idx) => {
        if (idx === 2) {
          return (
            <div
              key={"clinet-image-" + idx}
              className="relative left-1/2 top-1/2 size-40 -translate-x-1/2 -translate-y-1/2"
            >
              <ClientImage
                className="h-full w-full"
                src={`${ele.image.mainUrl}/160x160/${ele.image.queryKey}`}
                width={160}
                height={160}
                alt="Client image"
              />
              <span className="absolute -right-[15%] top-1/2 flex size-14 -translate-y-1/2 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <MessageSquareQuote size={30} />
              </span>
            </div>
          );
        } else {
          return (
            <ClientImage
              key={"clinet-image-" + idx}
              className={cn("size-24", clientClass(idx))}
              src={`${ele.image.mainUrl}/90x90/${ele.image.queryKey}`}
              width={90}
              height={90}
              alt="Client image"
            />
          );
        }
      })}
    </div>
  );
}

function ClientImage({
  className,
  width,
  height,
  src,
  alt,
}: {
  className?: string;
  width: number;
  height: number;
  src: string;
  alt: string;
}) {
  return (
    <div
      className={cn(
        "absolute overflow-hidden rounded-full border-2",
        className,
      )}
    >
      <Image
        className="h-full w-full object-cover object-center"
        width={width}
        height={height}
        src={src}
        alt={alt}
      />
    </div>
  );
}
