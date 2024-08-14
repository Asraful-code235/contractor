"use client";

import { useParams } from "next/navigation";
import { menuItems } from "./CollectionSidebar";

export default function CollectionsHero() {
  const params = useParams();
  const findCollection = (slug) => {
    return slug === "my-store"
      ? { title: "My Store" }
      : menuItems.find((item) => item.slug === slug);
  };
  const heading = findCollection(params.slug);
  console.log({ params, heading, check: "check" });
  return (
    <div className="relative bg-[url('/assets/images/jadoconstruction-image-06.jpg')] w-full py-32 bg-no-repeat bg-cover bg-center px-2">
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="relative z-10 text-center text-white">
        {heading.title ? (
          <h1 className="text-3xl lg:text-5xl font-semibold">
            {heading.title}
          </h1>
        ) : (
          <h1 className="text-5xl font-semibold">Jado Construction</h1>
        )}
      </div>
    </div>
  );
}
