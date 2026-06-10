import { Hero } from "@/components/sections/Hero";
import { WhoWeAre } from "@/components/sections/WhoWeAre";
import { Services } from "@/components/sections/Services";
import { About } from "@/components/sections/About";
import { FeaturedWork } from "@/components/sections/FeaturedWork";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <WhoWeAre />
      <Services />
      <About />
      <FeaturedWork />
      <Contact />
    </>
  );
}
