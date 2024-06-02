import cn from "@/lib/utils/cn";

const style = {
  base: "rotate-45 rounded-[50%] border h-[190px] w-[330px] md:h-[300px] md:w-[450px]",
  position: {
    secound: "absolute inset-0 -left-10 top-10",
    third: " absolute inset-0 -left-20 top-20",
  },
};

export default function Ellipse({ className }: { className?: string }) {
  return (
    <>
      <div
        className={cn("ellipse absolute inset-0 z-[-1] clear-both", className)}
      >
        <div className={cn(style.base)} />
        <div className={cn(style.base, style.position.secound)} />
        <div className={cn(style.base, style.position.third)} />
      </div>
    </>
  );
}
