"use client";

import { useEffect } from "react";
import HeroSectionContent from "./HeroSectionContent";
import OurWork from "./OurWork";
import ConstructionService from "./ConstructionService";
import RemodelingVideo from "./RemodelingVideo";
import CustomerTestimonials from "./CustomerTestimonials";

export default function HomeContent({ homePageData }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      {homePageData?.contentModules?.map((module, index) => {
        switch (module._type) {
          case "ourWork":
            return <OurWork module={module} key={module._key} />;
          case "servicesModule":
            return <ConstructionService module={module} key={module._key} />;
          case "showcaseProject":
            return <RemodelingVideo module={module} key={module._key} />;
          case "testimonialsSection":
            return <CustomerTestimonials module={module} key={module._key} />;
          default:
            return <div data-type={module._type} key={module._key} />;
        }
      })}
    </>
  );
}
