import Link from "next/link";
import { FaPhoneAlt } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { IoLogoTwitter } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";

export default function TopBar() {
  return (
    <div className="hidden lg:block">
      <div className="py-2 bg-brand-color-one text-black text-center text-sm lg:px-[94px] px-2 flex justify-between">
        <div className="flex items-center gap-2">
          <span>
            <FaPhoneAlt className="text-lg" />
          </span>
          <span>(786) 553-4508 All week from 9 am to 7 pm</span>
        </div>
        <div className="flex gap-4">
          <Link href="/">
            <FaFacebook className="text-xl" />
          </Link>
          <Link href="/">
            <IoLogoYoutube className="text-xl" />
          </Link>
          <Link href="/">
            <IoLogoTwitter className="text-xl" />
          </Link>
          <Link href="/">
            <FaLinkedin className="text-xl" />
          </Link>
          <Link href="/">
            <FaYoutube className="text-xl" />
          </Link>
        </div>
      </div>
    </div>
  );
}
