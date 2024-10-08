"use client";

import { useState, useEffect, useRef } from "react";
import { inter, lexend } from "@/app/layout";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Input } from "../ui/input";
import { usePathname } from "next/navigation";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";

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
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [show, setShow] = useState(true);
  const menuRef = useRef(null);
  const pathname = usePathname();

  useEffect(() => {
    if (pathname.includes("studio")) {
      setShow(false);
    }
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Handle clicks outside the menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  // Handle link clicks
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  // Handle menu toggle with animation
  const toggleMenu = () => {
    if (isMenuOpen) {
      // Start closing animation
      setIsAnimating(true);
      setTimeout(() => {
        setIsMenuOpen(false);
        setIsAnimating(false);
      }, 300);
    } else {
      setIsMenuOpen(true);
    }
  };

  return (
    <div
      className={cn(
        show ? "flex" : "hidden",
        lexend.className,
        "px-6 lg:px-[94px] py-3 justify-between items-center fixed left-0 w-full transition-all duration-300",
        isScrolled
          ? "bg-white/50 backdrop-blur-md text-black shadow-lg top-0"
          : pathname === "/"
            ? "bg-transparent text-white top-0 lg:top-9"
            : "bg-transparent text-black top-0 lg:top-9"
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
        <div className="hidden lg:block">
          <Input className="bg-transparent" placeholder="Search" />
        </div>
      </div>
      <div className="hidden lg:block">
        <div className="flex gap-6">
          {links.map((link) => (
            <Link key={link.href} href={link.href} onClick={handleLinkClick}>
              {link.title}
            </Link>
          ))}
        </div>
      </div>
      <div className="block lg:hidden">
        {isMenuOpen ? (
          <span onClick={toggleMenu}>
            <IoMdClose className="text-3xl" />
          </span>
        ) : (
          <span onClick={toggleMenu}>
            <RxHamburgerMenu className="text-3xl" />
          </span>
        )}
      </div>
      <div
        ref={menuRef}
        className={cn(
          "absolute  left-0 w-full bg-white/90 backdrop-blur-md text-black p-2 duration-500 ease-in z-50",
          isMenuOpen ? "top-[72px]" : "top-[-500px]"
        )}
        style={{ zIndex: isMenuOpen || isAnimating ? 99998 : -1 }}
      >
        <div className="flex flex-col gap-6 w-full">
          {links.map((link) => (
            <Link key={link.href} href={link.href} onClick={handleLinkClick}>
              {link.title}
            </Link>
          ))}
          <div>
            <Input
              className="bg-transparent border border-gray-300"
              placeholder="Search"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
