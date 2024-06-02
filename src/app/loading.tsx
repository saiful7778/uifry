import SiteLogo from "@/components/SiteLogo";

export default function loading() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center">
      <div className="animate-pulse">
        <SiteLogo />
      </div>
    </div>
  );
}
