import Image from "next/image";
import HeroBgImage from "../../../public/images/hero-phone-bg-image.png";
import AdvantageBgImage from "../../../public/images/advantage-image.png";
import jsonData from "@/lib/data.json";
import { Bell } from "lucide-react";
import Star from "../Star";
import Blob from "../Blob";

export default function Advantage() {
  return (
    <section
      id="advantage"
      className="relative my-16 flex flex-col justify-between gap-4 md:flex-row"
    >
      <div className="relative mt-20 w-full space-y-3 md:w-1/2">
        <div className="text-lg uppercase text-primary">Advantages</div>
        <h2 className="!mb-6 text-5xl font-bold">{jsonData.advantage.title}</h2>
        <div className="flex items-center gap-4">
          <div className="flex size-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
            <Bell />
          </div>
          <div className="text-2xl font-semibold">
            {jsonData.advantage.subtitle}
          </div>
        </div>
        <p className="text-details">{jsonData.advantage.details}</p>
      </div>
      <div className="relative flex w-full justify-end md:w-2/5">
        <Image src={AdvantageBgImage} alt="Advantage image" />
        <Image
          className="absolute inset-0 top-0 z-[-1]"
          src={HeroBgImage}
          alt="featrue bg image"
        />
        <Blob className="bottom-[10%] left-0" />
        <Star className="left-0 top-[5%]" />
      </div>
    </section>
  );
}
