import HeroBgImage from "../../../public/images/hero-phone-bg-image.png";
import FeatureBgImage from "../../../public/images/iPhone-13-Pro-Front.png";
import jsonData from "@/lib/data.json";
import Image from "next/image";
import Blob from "../Blob";
import Star from "../Star";

export default function Feature() {
  return (
    <section className="relative my-4 flex flex-col justify-between gap-4 md:flex-row">
      <div className="relative flex w-full justify-center md:w-2/5">
        <Image src={FeatureBgImage} alt="feature image" />
        <Image
          className="absolute inset-0 top-0 z-[-1]"
          src={HeroBgImage}
          alt="featrue bg image"
        />
        <Blob className="bottom-[10%] left-0" />
        <Star className="left-0 top-[5%]" />
      </div>
      <div className="relative mt-20 w-full space-y-3 md:w-1/2">
        <div className="text-lg uppercase text-primary">features</div>
        <h2 className="!mb-6 text-5xl font-bold">Uifry Premium</h2>
        {jsonData.features.map((feature, idx) => (
          <div className="flex gap-2" key={"feature-" + idx}>
            <div className="mt-1">
              <Image
                src={feature.icon}
                width={20}
                height={20}
                alt={`feature-${idx}-image`}
                title={`feature ${idx + 1} image`}
              />
            </div>
            <div>
              <h6 className="text-lg font-semibold">{feature.title}</h6>
              <p className="text-details">{feature.description}</p>
            </div>
          </div>
        ))}
        <Blob className="right-0 top-0" />
      </div>
    </section>
  );
}
