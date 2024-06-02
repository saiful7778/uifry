"use client";
import Image from "next/image";
import Tabs from "./ui/tabs";
import jsonData from "@/lib/data.json";

export default function ClientReview() {
  return (
    <Tabs defaultValue="client-0" className="space-y-4">
      {jsonData.testimonials.map((ele, idx) => (
        <Tabs.content value={"client-" + idx} key={"client-feedback-" + idx}>
          <p>{ele.feedback}</p>
        </Tabs.content>
      ))}
      <Tabs.list className="gap-4">
        {jsonData.testimonials.map((ele, idx) => (
          <Tabs.trigger
            className="p-0"
            value={"client-" + idx}
            key={"client-details-" + idx}
          >
            <Image
              className="size-7 overflow-auto rounded-full object-cover object-center"
              src={ele.avatar}
              width={30}
              height={30}
              alt={ele.name + " image"}
            />
          </Tabs.trigger>
        ))}
      </Tabs.list>
    </Tabs>
  );
}
