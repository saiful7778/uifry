import Advantage from "@/components/Sections/Advantage";
import FAQ from "@/components/Sections/FAQ";
import Feature from "@/components/Sections/Feature";
import GetStarted from "@/components/Sections/GetStarted";
import Hero from "@/components/Sections/Hero";
import Pricing from "@/components/Sections/Pricing";
import Testimonial from "@/components/Sections/Testimonial";

export default function Home() {
  return (
    <>
      <Hero />
      <Feature />
      <Advantage />
      <Testimonial />
      <FAQ />
      <Pricing />
      <GetStarted />
    </>
  );
}
