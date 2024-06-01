import Image from "next/image";
import star from "../../public/images/star.png";
import cn from "@/lib/utils/cn";

export default function Star({ className }: { className?: string }) {
  return (
    <Image
      className={cn("star absolute z-[-1]", className)}
      src={star}
      alt="star image"
    />
  );
}
