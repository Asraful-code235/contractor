import { inter, lexend } from "@/app/layout";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Input } from "../ui/input";

const links = [
  {
    title: "Bathroom Remodel",
    href: "/bathroom-remodel-miami-l-jado-construction",
  },
  {
    title: "Kitchen Remodel",
    href: "/kitchen-remodeling-contractor-miami-l-jado-construction",
  },
  {
    title: "Painting Service",
    href: "/painting-contractor-miami-l-jado-construction",
  },
  {
    title: "Plumbing Service",
    href: "/plumbing-service-miami-contractor-l-jado-construction",
  },
];

export default function Navbar() {
  return (
    <div
      className={cn(
        lexend.className,
        "px-[94px] py-3 flex justify-between items-center"
      )}
    >
      <div className="flex gap-10 items-center">
        <div className="flex flex-col">
          <span className={cn(inter.className, "text-2xl font-bold -mb-2")}>
            Jado
          </span>
          <span className={cn(inter.className, "")}>Construction</span>
        </div>
        <div>
          <Input placeholder="Search" />
        </div>
      </div>
      <div className="flex gap-6">
        {links.map((link) => (
          <Link key={link.href} href={link.href}>
            {link.title}
          </Link>
        ))}
      </div>
    </div>
  );
}
