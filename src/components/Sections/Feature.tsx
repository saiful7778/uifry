"use client";
import phone01 from "../../../public/images/phone-image-01.png";
import jsonData from "@/lib/data.json";
import Image from "next/image";
import Blob from "../Blob";
import Star from "../Star";
import Ellipse from "../Ellipse";
import { motion } from "framer-motion";

export default function Feature() {
  const animation = {
    initial: { opacity: 0, first: { x: -50 }, second: { x: 50 } },
    whileInView: { opacity: 1, x: 0 },
    viewport: { amount: "some", once: true },
    transition: { duration: 1, type: "spring" },
  } as const;

  return (
    <section
      id="features"
      className="my-16 flex flex-col justify-between gap-4 md:flex-row"
    >
      <motion.div
        initial={{ ...animation.initial, ...animation.initial.first }}
        whileInView={animation.whileInView}
        viewport={animation.viewport}
        transition={animation.transition}
        className="relative flex-1"
      >
        <Ellipse className="left-[10%] top-[5%]" />
        <Blob className="bottom-[10%] left-0" />
        <Star className="left-0 top-[5%]" />
        <Image
          className="mx-auto"
          src={phone01}
          width={200}
          height={403}
          alt="feature image"
        />
      </motion.div>
      <motion.div
        initial={{ ...animation.initial, ...animation.initial.second }}
        whileInView={animation.whileInView}
        viewport={animation.viewport}
        transition={animation.transition}
        className="relative flex-1 space-y-3"
      >
        <Blob className="-right-[20%] top-0" />
        <div className="text-lg uppercase text-primary">features</div>
        <h2 className="!mb-6 text-5xl font-bold">{jsonData.features.title}</h2>
        {jsonData.features.items.map((feature, idx) => (
          <motion.div
            initial={{ ...animation.initial, ...animation.initial.first }}
            whileInView={animation.whileInView}
            viewport={animation.viewport}
            transition={{ ...animation.transition, delay: idx * 0.4 }}
            className="flex gap-2"
            key={"feature-" + idx}
          >
            <Image
              className="mt-1 size-5"
              src={feature.icon}
              width={20}
              height={20}
              alt={`feature-${idx}-image`}
              title={`feature ${idx + 1} image`}
            />
            <div>
              <h6 className="text-lg font-semibold">{feature.title}</h6>
              <p className="text-details">{feature.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
