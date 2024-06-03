"use client";
import Image from "next/image";
import phone1 from "../../../public/images/phone-image-01.png";
import phone2 from "../../../public/images/phone-image-02.png";
import stacks from "../../../public/images/stacks.png";
import card from "../../../public/images/card.png";
import jsonData from "@/lib/data.json";
import { Bell } from "lucide-react";
import Star from "../Star";
import Blob from "../Blob";
import Ellipse from "../Ellipse";
import { motion } from "framer-motion";

export default function Advantage() {
  const animation = {
    initial: { opacity: 0, first: { x: -50 }, second: { x: 50 } },
    whileInView: { opacity: 1, x: 0 },
    viewport: { amount: "some", once: true },
    transition: { duration: 1, type: "spring" },
  } as const;

  return (
    <>
      <section
        id="advantage"
        className="my-16 flex flex-col justify-between gap-4 md:flex-row"
      >
        <motion.div
          initial={{ ...animation.initial, ...animation.initial.first }}
          whileInView={animation.whileInView}
          viewport={animation.viewport}
          transition={animation.transition}
          className="relative mt-20 w-full space-y-3 md:w-1/2"
        >
          <div className="text-lg uppercase text-primary">Advantages</div>
          <h2 className="!mb-6 text-5xl font-bold">
            {jsonData.advantage.title}
          </h2>
          <div className="flex items-center gap-4">
            <div className="flex size-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <Bell />
            </div>
            <div className="text-2xl font-semibold">
              {jsonData.advantage.advantages[0].title}
            </div>
          </div>
          <p className="text-details">
            {jsonData.advantage.advantages[0].details}
          </p>
        </motion.div>
        <motion.div
          initial={{ ...animation.initial, ...animation.initial.second }}
          whileInView={animation.whileInView}
          viewport={animation.viewport}
          transition={animation.transition}
          className="relative flex w-full justify-center md:w-2/5"
        >
          <div className="relative">
            <Image
              src={phone2}
              width={200}
              height={403}
              alt="Advantage image"
            />
            <Image
              className="absolute bottom-[40%] left-[30%] shadow-xl drop-shadow-xl"
              src={stacks}
              alt="stacks image"
            />
          </div>
          <Ellipse className="top-[5%]" />
          <Blob className="bottom-[10%] left-0" />
          <Star className="right-0 top-[5%]" />
        </motion.div>
      </section>
      <section className="my-16 flex flex-col items-center justify-between gap-4 md:flex-row">
        <motion.div
          initial={{ ...animation.initial, ...animation.initial.first }}
          whileInView={animation.whileInView}
          viewport={animation.viewport}
          transition={animation.transition}
          className="relative flex w-full justify-center max-md:order-2 md:w-2/5"
        >
          <div className="relative">
            <Image
              src={phone1}
              width={200}
              height={403}
              alt="Advantage image"
            />
            <Image
              className="absolute left-[10%] top-[23%]"
              src={card}
              alt="card image"
            />
          </div>
          <Ellipse className="top-[5%]" />
          <Blob className="bottom-[10%] left-0" />
          <Star className="right-0 top-[5%]" />
        </motion.div>
        <motion.div
          initial={{ ...animation.initial, ...animation.initial.second }}
          whileInView={animation.whileInView}
          viewport={animation.viewport}
          transition={animation.transition}
          className="relative mt-20 w-full space-y-3 max-md:order-1 md:w-1/2"
        >
          <div className="flex items-center gap-4">
            <div className="flex size-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <Bell />
            </div>
            <div className="text-2xl font-semibold">
              {jsonData.advantage.advantages[1].title}
            </div>
          </div>
          <p className="text-details">
            {jsonData.advantage.advantages[1].details}
          </p>
        </motion.div>
      </section>
    </>
  );
}
