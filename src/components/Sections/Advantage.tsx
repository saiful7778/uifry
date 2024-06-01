import Image from "next/image";
import AdvantageBgImage1 from "../../../public/images/advantage-image-1.png";
import AdvantageBgImage2 from "../../../public/images/advantage-image-2.png";
import jsonData from "@/lib/data.json";
import { Bell } from "lucide-react";
import Star from "../Star";
import Blob from "../Blob";
import Ellipse from "../Ellipse";

export default function Advantage() {
  return (
    <>
      <section
        id="advantage"
        className="relative my-16 flex flex-col justify-between gap-4 md:flex-row"
      >
        <div className="relative mt-20 w-full space-y-3 md:w-1/2">
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
        </div>
        <div className="relative flex w-full justify-center md:w-2/5">
          <Image
            src={AdvantageBgImage1}
            width={250}
            height={400}
            alt="Advantage image"
          />
          <Ellipse className="top-[5%]" />
          <Blob className="bottom-[10%] left-0" />
          <Star className="right-0 top-[5%]" />
        </div>
      </section>
      <section className="relative my-16 flex flex-col items-center justify-between gap-4 md:flex-row">
        <div className="relative flex w-full justify-center max-md:order-2 md:w-2/5">
          <Image
            src={AdvantageBgImage2}
            width={250}
            height={400}
            alt="Advantage image"
          />
          <Ellipse className="top-[5%]" />
          <Blob className="bottom-[10%] left-0" />
          <Star className="right-0 top-[5%]" />
        </div>
        <div className="relative mt-20 w-full space-y-3 max-md:order-1 md:w-1/2">
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
        </div>
      </section>
    </>
  );
}
