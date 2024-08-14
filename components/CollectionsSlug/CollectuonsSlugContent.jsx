"use client";

import { useParams } from "next/navigation";
import { menuItems } from "./CollectionSidebar";
import ProductCard from "./ProductCard";

export default function CollectuonsSlugContent() {
  const params = useParams();
  const findCollection = (slug) => {
    return menuItems.find((item) => item.slug === slug);
  };

  console.log({ slugs: findCollection(params.slug) });
  return (
    <div>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
        {Array(12)
          .fill(0)
          .map((_, index) => (
            <ProductCard key={index} />
          ))}
      </div>
    </div>
  );
}
