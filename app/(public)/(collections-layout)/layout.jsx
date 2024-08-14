import CollectionsHero from "@/components/CollectionsSlug/CollectionsHero";
import CollectionSidebar from "@/components/CollectionsSlug/CollectionSidebar";

export default function CollectionLayout({ children }) {
  return (
    <div className="bg-brand-bg-color min-h-screen ">
      <CollectionsHero />
      <div className="py-10 container mx-auto block lg:flex w-full gap-10 space-y-8 lg:space-y-0">
        <div className="w-full lg:w-3/12">
          <CollectionSidebar />
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
}
