"use client";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import jsonData from "@/lib/data.json";
import { useState } from "react";

export default function Gallery() {
  const [selected, setSelected] = useState<{
    image: string;
    id: string;
  } | null>(null);

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
        <div className="text-lg uppercase text-primary">Gallery</div>
        <h2 className="!mb-6 text-5xl font-bold">All images</h2>
      </motion.div>
      <div className="relative my-16 grid grid-cols-1 place-items-center gap-4 md:grid-cols-3 xl:grid-cols-4">
        {jsonData.gallery.map((ele, idx) => (
          <motion.div
            onClick={() => {
              setSelected({
                image: `https://source.unsplash.com/250x250/?${ele}`,
                id: "gallery-image-" + idx,
              });
            }}
            initial={{ opacity: 0, x: -50 }}
            whileInView={animation.whileInView}
            viewport={animation.viewport}
            transition={{ duration: 0.5, type: "spring", delay: idx * 0.2 }}
            className="h-[250px] w-[250px] cursor-pointer duration-300 hover:scale-[1.1]"
            layoutId={"gallery-image-" + idx}
            whileTap={{
              scale: 1.1,
              transition: {
                duration: 0.3,
              },
            }}
            key={"gallery-image-" + idx}
          >
            <Image
              src={`https://source.unsplash.com/250x250/?${ele}`}
              width={250}
              height={250}
              alt="gallery image"
            />
          </motion.div>
        ))}
      </div>
      <AnimatePresence>
        {selected && (
          <div
            onClick={() => {
              setSelected(null);
            }}
            className="fixed inset-0 z-[110] flex min-h-screen w-full items-center justify-center bg-details"
          >
            <motion.div
              layoutId={selected.id}
              onClick={(e) => e.stopPropagation()}
              className="relative"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, type: "spring" }}
            >
              <Image
                src={selected.image}
                alt="gallery image popup"
                width={250}
                height={250}
              />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
