"use client";
import CountUp from "react-countup";
import Heading from "../shared/Heading";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { HiOutlineHome } from "react-icons/hi2";
import { FaHandshake } from "react-icons/fa6";
import { PiOfficeChair } from "react-icons/pi";

export default function OurWork() {
  return (
    <div className="py-[94px] bg-brand-color-two">
      <div className="container mx-auto">
        <Heading
          titleClass="text-white"
          descriptionClass="text-white"
          title="Our Work"
          description="Choose an experienced General Contractor with local expertise for the job"
        />
        <div className="mt-14">
          <div className="block space-y-8 lg:space-y-0 lg:flex justify-between gap-4">
            <div className="flex flex-col gap-2 items-center">
              <HiOutlineBuildingOffice2 className="text-7xl text-brand-color-one" />
              <CountUp start={1} end={104}>
                {({ countUpRef, start }) => (
                  <div>
                    <span
                      className="text-white font-bold text-4xl"
                      ref={countUpRef}
                    />
                    <span className="text-white font-bold text-4xl">+</span>
                  </div>
                )}
              </CountUp>
              <span className="text-white">Completed Property</span>
            </div>
            <div className="flex flex-col gap-2 items-center">
              <HiOutlineHome className="text-7xl text-brand-color-one" />
              <CountUp start={1} end={354}>
                {({ countUpRef, start }) => (
                  <div>
                    <span
                      className="text-white font-bold text-4xl"
                      ref={countUpRef}
                    />
                    <span className="text-white font-bold text-4xl">+</span>
                  </div>
                )}
              </CountUp>
              <span className="text-white">Renovated Properties</span>
            </div>
            <div className="flex flex-col gap-2 items-center">
              <FaHandshake className="text-7xl text-brand-color-one" />
              <CountUp start={1} end={1430}>
                {({ countUpRef, start }) => (
                  <div>
                    <span
                      className="text-white font-bold text-4xl"
                      ref={countUpRef}
                    />
                    <span className="text-white font-bold text-4xl">+</span>
                  </div>
                )}
              </CountUp>
              <span className="text-white">Happy Clients</span>
            </div>
            <div className="flex flex-col gap-2 items-center">
              <PiOfficeChair className="text-7xl text-brand-color-one" />
              <CountUp start={1} end={1504}>
                {({ countUpRef, start }) => (
                  <div>
                    <span
                      className="text-white font-bold text-4xl"
                      ref={countUpRef}
                    />
                    <span className="text-white font-bold text-4xl">+</span>
                  </div>
                )}
              </CountUp>
              <span className="text-white">Completed Jobs</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
