import Brands from "@/components/Brands";
import Contacts from "@/components/Conacts";
import FeaturedProjects from "@/components/FeaturedProjects";
import Hero from "@/components/Hero";
import HowWorks from "@/components/HowWorks";
import Stats from "@/components/Stats";

export default function Home() {
  return (
   <>
            <Hero/>
            <Stats/>
            <HowWorks/>
            <FeaturedProjects/>
            <Contacts/>
            <Brands/>
   </>
  )
}
