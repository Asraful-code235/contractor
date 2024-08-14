import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

export const menuItems = [
  {
    title: "Electrician Contractor",
    slug: "electrician-contractor",
  },
  {
    title: "Kitchen Remodel Contractor",
    slug: "kitchen-remodel",
  },
  {
    title: "New Construction Contractor",
    slug: "new-construction",
  },
  {
    title: "Plumbing Contractor",
    slug: "plumbing-renovation",
  },
  {
    title: "Remodeling Contractor",
    slug: "remodeling-renovation",
  },
];

export default function CollectionSidebar() {
  return (
    <div className="shadow-sm border px-5 rounded-sm bg-white">
      <Accordion
        type="single"
        collapsible
        className="w-full"
        defaultValue="item-1"
      >
        <AccordionItem value="item-1">
          <AccordionTrigger>Collections</AccordionTrigger>
          {menuItems.map((item, index) => (
            <AccordionContent key={item.slug}>
              <Link
                className="hover:underline"
                href={`/collections/${item.slug}`}
              >
                {item.title}
              </Link>
            </AccordionContent>
          ))}
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Collections</AccordionTrigger>
          <AccordionContent>
            <Link className="hover:underline" href="/collections/my-store">
              My Store
            </Link>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
