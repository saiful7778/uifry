import Link from "next/link";
import bg from "../../../public/images/get-started.png";
import Button from "../ui/button";
import jsonData from "@/lib/data.json";

export default function GetStarted() {
  return (
    <section
      id="get-started"
      className="dark flex h-[509px] flex-col items-start justify-center gap-4 rounded-md bg-cover bg-center bg-no-repeat p-2 text-foreground md:p-16"
      style={{ backgroundImage: `url('${bg.src}')` }}
    >
      <h3 className="text-5xl font-bold">{jsonData.getStarted.title}</h3>
      <p>{jsonData.getStarted.subtitle}</p>
      <Button asChild>
        <Link href={jsonData.getStarted.ctaButton.link}>
          {jsonData.getStarted.ctaButton.text}
        </Link>
      </Button>
    </section>
  );
}
