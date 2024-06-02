"use client";
import jsonData from "@/lib/data.json";
import cn from "@/lib/utils/cn";
import { motion } from "framer-motion";

export default function FAQ() {
  let curIdx: number = 0;

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
      >
        <div className="text-lg uppercase text-primary">
          {jsonData.FAQ.subtitle}
        </div>
        <h2 className="!mb-6 w-full max-w-md text-5xl font-bold">
          {jsonData.FAQ.title}
        </h2>
      </motion.div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {jsonData.FAQ.questions.map((ele, idx) => {
          curIdx++;
          if (curIdx > 3) {
            curIdx = 0;
          }
          return (
            <motion.div
              initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
              whileInView={animation.whileInView}
              viewport={animation.viewport}
              transition={{ ...animation.transition, delay: idx * 0.2 }}
              key={"questions-" + idx}
              className={cn(
                "rounded p-6",
                curIdx < 2 && "bg-primary text-primary-foreground",
              )}
            >
              <h6 className="mb-2 text-3xl font-semibold">{ele.title}</h6>
              <p className={cn(curIdx < 2 || "text-details")}>
                {ele.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
