import cn from "@/lib/utils/cn";

export default function Ellipse({ className }: { className?: string }) {
  return (
    <div className={cn("absolute inset-0 z-[-1]", className)}>
      <div className="absolute inset-0 h-[300px] w-[450px] rotate-45 rounded-[50%] border" />
      <div className="absolute inset-0 -left-10 top-10 h-[300px] w-[450px] rotate-45 rounded-[50%] border" />
      <div className="absolute inset-0 -left-20 top-20 h-[300px] w-[450px] rotate-45 rounded-[50%] border" />
    </div>
  );
}
