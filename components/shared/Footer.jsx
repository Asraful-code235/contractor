import Link from "next/link";
import { FaPhoneAlt } from "react-icons/fa";
import { FiClock } from "react-icons/fi";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <div className="bg-gray-800 py-8 px-2 lg:p-[94px]">
      <div className="text-white lg:text-start text-center block space-y-16 lg:space-y-0 lg:flex justify-between">
        <div>
          <Link href="/">
            <div className="flex flex-col">
              <span className="text-3xl -mb-2">Jadu</span>
              <span className="text-xl">construction</span>
            </div>
          </Link>
        </div>
        <div className="space-y-8 lg:space-y-0 block lg:flex gap-20">
          <div>
            <div className="mb-4 font-semibold">Follow Us</div>
            <div className="flex flex-col gap-2">
              <Link href="/">
                <span className="text-white">Facebook</span>
              </Link>
              <Link href="/">
                <span className="text-white">Instagram</span>
              </Link>
              <Link href="/">
                <span className="text-white">Twitter</span>
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-3 lg:items-start items-center">
            <div className="flex gap-2">
              <FaPhoneAlt className="text-lg mt-1" />
              <span>Call Us: (786)-553-4508</span>
            </div>
            <div className="flex gap-2">
              <FiClock className="text-lg mt-1" />
              <span>
                Mon-Fri: 9:00 am - 6:00 pm <br />
                Sat: 9:00 am - 5:00 pm <br />
                Sun: 9:00 am - 5:00 pm <br />
              </span>
            </div>
            <div className="flex gap-2">
              <MdEmail className="text-lg mt-1" />
              <span>joe@Jadoconstruction.com</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
