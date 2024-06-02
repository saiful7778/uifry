import SiteLogo from "@/components/SiteLogo";

export default function loading() {
  return (
    <div className="flex w-full items-center justify-center p-4">
      <div className="animate-pulse">
        <SiteLogo />
      </div>
    </div>
  );
}
