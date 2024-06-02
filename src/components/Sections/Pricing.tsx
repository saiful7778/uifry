"use client";
import jsonData from "@/lib/data.json";
import cn from "@/lib/utils/cn";
import { motion } from "framer-motion";
import Button from "../ui/button";

export default function Pricing() {
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
        <div className="text-lg uppercase text-primary">Pricing</div>
        <h2 className="!mb-6 text-5xl font-bold">Choose your plan</h2>
      </motion.div>
      <div className="my-16 flex flex-col justify-center gap-4 md:flex-row">
        {jsonData.pricing.map((ele, idx) => (
          <motion.div
            initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
            whileInView={animation.whileInView}
            viewport={animation.viewport}
            transition={{ ...animation.transition, delay: idx * 0.2 }}
            className={cn(
              "flex flex-col justify-between gap-8 rounded-md border p-4",
              idx % 2 !== 0 &&
                "dark border-primary-foreground bg-primary text-primary-foreground",
            )}
            key={"pricing-" + idx}
          >
            <div>
              <div className="mb-2 text-center">
                <div className="mb-4 text-lg font-medium">{ele.plan}</div>
                <h6 className="text-3xl font-semibold">{ele.price}</h6>
              </div>
              <ul className="space-y-4">
                {ele.features.map((feature, idx) => (
                  <li className="" key={"feature-" + idx}>
                    {idx + 1}. {feature}
                  </li>
                ))}
              </ul>
            </div>
            <Button>Buy this</Button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
