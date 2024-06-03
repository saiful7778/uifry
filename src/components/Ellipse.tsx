"use client";
import cn from "@/lib/utils/cn";
import { motion } from "framer-motion";

const style = {
  base: "rotate-45 rounded-[50%] border w-full h-full",
  position: {
    secound: "absolute inset-0 top-10",
    third: " absolute inset-0 top-20",
  },
};

export default function Ellipse({ className }: { className?: string }) {
  return (
    <>
      <div
        className={cn(
          "absolute -z-[1] h-[190px] w-[330px] md:h-[300px] md:w-[450px]",
          className,
        )}
      >
        {Array(3)
          .fill("absolute rotate-45 rounded-[50%] border w-full h-full")
          .map((ele, idx) => (
            <motion.div
              key={`ellipse-${idx}`}
              initial={{ opacity: 0, left: 0, top: idx * 40 }}
              whileInView={{ opacity: 1, left: -(idx * 40), top: idx * 40 }}
              viewport={{ amount: "some", once: true }}
              transition={{ duration: 1, type: "spring", delay: idx * 0.4 }}
              className={cn(`-z-[${idx + 1}] ${ele}`)}
            />
          ))}
      </div>
    </>
  );
}
