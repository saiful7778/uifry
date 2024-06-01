import HeroBgImage from "../../../public/images/hero-phone-bg-image.png";
import FeatureBgImage from "../../../public/images/iPhone-13-Pro-Front.png";
import jsonData from "@/lib/data.json";
import Image from "next/image";
import Blob from "../Blob";
import Star from "../Star";
import Ellipse from "../Ellipse";

export default function Feature() {
  return (
    <section
      id="features"
      className="relative my-16 flex flex-col justify-between gap-4 md:flex-row"
    >
      <div className="relative flex w-full justify-center md:w-2/5">
        <Image
          src={FeatureBgImage}
          width={200}
          height={366}
          alt="feature image"
        />
        <Ellipse className="top-[5%]" />
        <Blob className="bottom-[10%] left-0" />
        <Star className="left-0 top-[5%]" />
      </div>
      <div className="relative mt-20 w-full space-y-3 md:w-1/2">
        <div className="text-lg uppercase text-primary">features</div>
        <h2 className="!mb-6 text-5xl font-bold">{jsonData.features.title}</h2>
        {jsonData.features.items.map((feature, idx) => (
          <div className="flex gap-2" key={"feature-" + idx}>
            <div className="mt-1">
              <Image
                className="size-5"
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
