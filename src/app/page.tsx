import FeaturedPlaces from "@/Components/FeaturedPlaces";
import Hero from "@/Components/Hero";
import OurServices from "@/Components/OurServices";
import Image from "next/image";

export default function Home() {
  return (
    
    <div>
      <Hero/>
      <FeaturedPlaces/>
      <OurServices/>
    </div>
  );
}
