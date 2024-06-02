import jsonData from "@/lib/data.json";
import cn from "@/lib/utils/cn";

export default function FAQ() {
  let curIdx: number = 0;
  return (
    <section className="my-16">
      <div className="text-lg uppercase text-primary">
        {jsonData.FAQ.subtitle}
      </div>
      <h2 className="!mb-6 w-full max-w-md text-5xl font-bold">
        {jsonData.FAQ.title}
      </h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {jsonData.FAQ.questions.map((ele, idx) => {
          curIdx++;
          if (curIdx > 3) {
            curIdx = 0;
          }
          return (
            <div
              key={"questions-" + idx}
              className={cn(
                "rounded p-6",
                curIdx < 2 && "bg-primary text-primary-foreground",
              )}
            >
              <h6 className="mb-2 text-3xl font-semibold">{ele.title}</h6>
              <p className={cn(curIdx < 2 || "text-details")}>
                {ele.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
