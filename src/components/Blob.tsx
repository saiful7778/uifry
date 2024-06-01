import cn from "@/lib/utils/cn";

export default function Blob({
  className,
  firstClassName,
  secoundClassName,
}: {
  className?: string;
  firstClassName?: string;
  secoundClassName?: string;
}) {
  return (
    <div className={cn("absolute z-[-1]", className)}>
      <div
        className={cn(
          "z-[-1] h-[150px] w-[250px] rounded-[50%] bg-blob-primary blur-[50px] filter",
          firstClassName,
        )}
      ></div>
      <div
        className={cn(
          "absolute left-0 top-14 z-[-2] h-[150px] w-[250px] rounded-[50%] bg-blob-secondary blur-[50px] filter",
          secoundClassName,
        )}
      ></div>
    </div>
  );
}
