import { Hero } from "@/components/Hero";
import { SelectedWork } from "@/components/SelectedWork";
import { PersonalProjects } from "@/components/PersonalProjects";
import { Services } from "@/components/Services";
import { AboutTeaser } from "@/components/AboutTeaser";

export default function Home() {
  return (
    <>
      <Hero />
      <SelectedWork />
      <PersonalProjects />
      <Services />
      <AboutTeaser />
    </>
  );
}
