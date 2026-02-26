import { Hero } from "@/components/Hero";
import { SelectedWork } from "@/components/SelectedWork";
import { WorkedWith } from "@/components/WorkedWith";
import { Philosophy } from "@/components/Philosophy";
import { Services } from "@/components/Services";
import { AboutTeaser } from "@/components/AboutTeaser";

export default function Home() {
  return (
    <>
      <Hero />
      <SelectedWork />
      <WorkedWith />
      <Philosophy />
      <Services />
      <AboutTeaser />
    </>
  );
}
