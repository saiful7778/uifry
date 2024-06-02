import cn from "@/lib/utils/cn";

const style = {
  base: "relative h-[150px] w-[250px] rounded-[50%] blur-[30px] filter",
  primary: "bg-blob-primary blob-primary",
  secondary: "bg-blob-secondary blob-secondary top-1/2 absolute z-[-1]",
};

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
    <>
      <div className={cn("absolute z-[-1]", className)}>
        <div className={cn(style.base, style.primary, firstClassName)} />
        <div className={cn(style.base, style.secondary, secoundClassName)} />
      </div>
    </>
  );
}
