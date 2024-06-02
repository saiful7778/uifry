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
    <div className={cn("blob absolute z-[-1]", className)}>
      <div
        className={cn(
          "blob-primary inset-0 z-[-1] h-[150px] w-[250px] rounded-[50%] bg-blob-primary blur-[30px] filter",
          firstClassName,
        )}
      />
      <div
        className={cn(
          "blob-secondary absolute inset-0 top-[20%] z-[-2] h-[150px] w-[250px] rounded-[50%] bg-blob-secondary blur-[40px] filter",
          secoundClassName,
        )}
      />
    </div>
  );
}
