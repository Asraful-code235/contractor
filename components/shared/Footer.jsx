import Link from "next/link";
import { FaPhoneAlt } from "react-icons/fa";
import { FiClock } from "react-icons/fi";
import { MdEmail } from "react-icons/md";

export default function Footer({ utils }) {
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
            <div className="flex flex-col gap-2 ">
              {utils?.footerLinks?.map((item, key) => (
                <Link href={item?.socialMediaLink} key={key} target="_blank">
                  <span className="text-white">{item.title}</span>
                </Link>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-3 lg:items-start items-center">
            <div className="flex gap-2">
              <FaPhoneAlt className="text-lg mt-1" />
              <span>Call Us: (786)-553-4508</span>
            </div>
            <div className="flex gap-2">
              <FiClock className="text-lg mt-1" />
              <span className="flex flex-col">
                {utils?.scheduleTime?.map((item, key) => (
                  <span key={key}>{item}</span>
                ))}
              </span>
            </div>
            <div className="flex gap-2">
              <MdEmail className="text-lg mt-1" />
              <a
                href={`mailto:${utils?.email}`}
                className="text-blue-500 hover:underline"
              >
                Send us an email
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
