"use client";
import Image from "next/image";
import Tabs from "./ui/tabs";
import jsonData from "@/lib/data.json";

export default function ClientReview() {
  return (
    <Tabs defaultValue="client-0" className="space-y-2">
      {jsonData.testimonials.map((ele, idx) => (
        <Tabs.content value={"client-" + idx} key={"client-feedback-" + idx}>
          <p>{ele.feedback}</p>
        </Tabs.content>
      ))}
      <Tabs.list className="gap-4 p-0">
        {jsonData.testimonials.map((ele, idx) => (
          <Tabs.trigger
            className="size-[35px] overflow-hidden rounded-full p-0 opacity-50 data-[state=active]:size-[50px] data-[state=active]:opacity-100"
            value={"client-" + idx}
            key={"client-details-" + idx}
          >
            <Image
              className="h-full w-full object-cover object-center"
              src={`${ele.image.mainUrl}/40x40/${ele.image.queryKey}`}
              width={40}
              height={40}
              alt={ele.username + " image"}
            />
          </Tabs.trigger>
        ))}
      </Tabs.list>
      {jsonData.testimonials.map((ele, idx) => (
        <Tabs.content value={"client-" + idx} key={"client-name-" + idx}>
          <div className="text-lg font-semibold">{ele.username}</div>
        </Tabs.content>
      ))}
    </Tabs>
  );
}
