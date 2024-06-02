import cn from "@/lib/utils/cn";
import client01 from "../../../public/images/clients/client-01.jpg";
import client02 from "../../../public/images/clients/client-02.jpg";
import client03 from "../../../public/images/clients/client-03.jpg";
import client04 from "../../../public/images/clients/client-04.jpg";
import client05 from "../../../public/images/clients/client-05.jpg";
import Blob from "../Blob";
import Ellipse from "../Ellipse";
import jsonData from "@/lib/data.json";
import Image, { StaticImageData } from "next/image";
import { MessageSquareQuote } from "lucide-react";
import ClientReview from "../ClientReview";

export default function Testimonial() {
  return (
    <section className="my-16">
      <div className="mx-auto w-full max-w-md text-center">
        <div className="text-lg uppercase text-primary">Testimonial</div>
        <h2 className="!mb-6 text-5xl font-bold">
          What our users say about us?
        </h2>
      </div>
      <div className="relative my-16 flex flex-col justify-between gap-4 md:flex-row">
        <div className="relative flex w-full justify-center md:w-2/5">
          <ClientImagesSection />
          <Ellipse className="top-[5%]" />
          <Blob className="bottom-[30%] left-0" />
        </div>
        <div className="relative w-full space-y-3 md:w-1/2">
          <h2 className="!mb-6 text-3xl font-semibold">
            The best financial accounting app ever!
          </h2>
          <Blob className="right-0 top-0" />
          <ClientReview />
        </div>
      </div>
    </section>
  );
}

function ClientImagesSection() {
  return (
    <div className="relative mr-auto h-[400px] w-full max-w-sm">
      <ClientImage className="left-0 top-0" src={client01} alt="Client image" />
      <ClientImage
        className="right-0 top-0"
        src={client02}
        alt="Client image"
      />
      <div className="relative left-1/2 top-1/2 size-40 -translate-x-1/2 -translate-y-1/2">
        <ClientImage
          className="h-full w-full"
          src={client03}
          alt="Client image"
        />
        <span className="absolute -right-[15%] top-1/2 flex size-14 -translate-y-1/2 items-center justify-center rounded-full bg-primary text-primary-foreground">
          <MessageSquareQuote size={30} />
        </span>
      </div>
      <ClientImage
        className="bottom-0 left-0"
        src={client04}
        alt="Client image"
      />
      <ClientImage
        className="bottom-0 right-0"
        src={client05}
        alt="Client image"
      />
    </div>
  );
}

function ClientImage({
  className,
  src,
  alt,
}: {
  className?: string;
  src: StaticImageData;
  alt: string;
}) {
  return (
    <div
      className={cn(
        "absolute size-24 overflow-hidden rounded-full border-2",
        className,
      )}
    >
      <Image
        className="h-full w-full object-cover object-center"
        src={src}
        alt={alt}
      />
    </div>
  );
}
