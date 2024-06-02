"use client";
import Link from "next/link";
import bg from "../../../public/images/get-started.png";
import Button from "../ui/button";
import jsonData from "@/lib/data.json";
import { motion } from "framer-motion";

export default function GetStarted() {
  const animation = {
    initial: { opacity: 0, y: -100 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { amount: "some", once: true },
    transition: { duration: 1, type: "spring" },
  } as const;

  return (
    <motion.section
      id="get-started"
      initial={animation.initial}
      whileInView={animation.whileInView}
      viewport={animation.viewport}
      transition={animation.transition}
      className="dark flex h-[509px] flex-col items-start justify-center gap-4 rounded-md bg-cover bg-center bg-no-repeat p-2 text-foreground md:p-16"
      style={{ backgroundImage: `url('${bg.src}')` }}
    >
      <h3 className="text-5xl font-bold">{jsonData.getStarted.title}</h3>
      <p>{jsonData.getStarted.subtitle}</p>
      <Button asChild>
        <Link href={jsonData.getStarted.ctaButton.link}>
          {jsonData.getStarted.ctaButton.text}
        </Link>
      </Button>
    </motion.section>
  );
}
