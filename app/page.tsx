import Hero from "./components/Hero";
import RenderGallery from "./components/RenderGallery";
import Plans from "./components/Plans";
import ProjectInfo from "./components/ProjectInfo";
import Logo from "./components/Logo";

export default function Home() {
  return (
    <>
      <Hero />
      <RenderGallery />
      <Plans />
      <ProjectInfo />
      <Logo />
    </>
  );
}