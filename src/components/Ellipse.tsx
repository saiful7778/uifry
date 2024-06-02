import cn from "@/lib/utils/cn";

const style = {
  base: "absolute inset-0 rotate-45 rounded-[50%] border h-[200px] w-[350px] md:h-[300px] md:w-[450px]",
  position: {
    secound: "-left-10 top-10",
    third: "-left-20 top-20",
  },
};

export default function Ellipse({ className }: { className?: string }) {
  return (
    <div className={cn("absolute inset-0 left-0 z-[-2] clear-both", className)}>
      <div className={cn(style.base)} />
      <div className={cn(style.base, style.position.secound)} />
      <div className={cn(style.base, style.position.third)} />
    </div>
  );
}
