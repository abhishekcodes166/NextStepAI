import Image from "next/image";
import { Button } from "@/components/ui/button";
import Herosection from "@/components/ui/herosection";
import FeaturesSection from "@/components/ui/FeaturesSection";

export default function Home() {
  return (
    <div>
      <Herosection/>
      <FeaturesSection/>
    </div>
  );
}
