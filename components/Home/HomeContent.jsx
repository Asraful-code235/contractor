"use client";

import { useEffect } from "react";
import HeroSectionContent from "./HeroSectionContent";
import OurWork from "./OurWork";
import ConstructionService from "./ConstructionService";

export default function HomeContent() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <HeroSectionContent />
      <OurWork />
      <ConstructionService />
    </>
  );
}
