"use client";

import { useState, useEffect } from "react";
import { inter, lexend } from "@/app/layout";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Input } from "../ui/input";
import { usePathname, useRouter } from "next/navigation";

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
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  console.log({ pathname });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={cn(
        lexend.className,
        "px-[94px] py-3 flex justify-between items-center fixed top-0 left-0 w-full transition-all duration-300",
        isScrolled
          ? "bg-white/50 backdrop-blur-md text-black shadow-lg"
          : pathname === "/"
          ? "bg-transparent text-white"
          : "bg-transparent text-black"
      )}
      style={{ zIndex: 99999 }}
    >
      <div className="flex gap-10 items-center">
        <Link href="/" className="flex flex-col">
          <span className={cn(inter.className, "text-2xl font-bold -mb-2")}>
            Jado
          </span>
          <span className={cn(inter.className, "")}>Construction</span>
        </Link>
        <div>
          <Input className="bg-transparent" placeholder="Search" />
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
