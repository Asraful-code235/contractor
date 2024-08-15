"use client";

import { useState } from "react";
import Heading from "../shared/Heading";
import Image from "next/image";
import { Button } from "../ui/button";

export default function RemodelingVideo({ module }) {
  const [videoLoaded, setVideoLoaded] = useState(false);

  const videoUrl = module?.video?.asset?._ref
    ? `https://cdn.sanity.io/files/${
        process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
      }/${process.env.NEXT_PUBLIC_SANITY_DATASET}/${module.video.asset._ref
        .replace("file-", "")
        .replace("-mp4", ".mp4")}`
    : null;

  return (
    <div className="bg-gray-100">
      <div className="py-8 px-6 lg:py-[94px] container mx-auto">
        <div>
          <Heading
            title={module?.title || "45 Day Remodel"}
            description={module?.subtitle || "Complete Home Remodel"}
          />
        </div>
        <div className="flex flex-col gap-16 justify-center mt-8 lg:mt-16">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-16">
            <div className="space-y-6 w-full lg:w-[40%]">
              <h3 className="text-2xl lg:text-4xl font-bold">
                {module?.showcaseTitle || "  North Miami Projects"}
              </h3>
              <p className="text-gray-500 lg:text-base text-sm">
                {module?.description}
              </p>
            </div>
            <div className="relative w-full lg:w-[60%] rounded-md overflow-hidden">
              {!videoLoaded ? (
                <div
                  className="relative cursor-pointer"
                  onClick={() => setVideoLoaded(true)}
                >
                  <Image
                    width={600}
                    height={400}
                    src="/assets/images/jadoconstruction-image-03.webp" // Replace with your thumbnail image path
                    alt="Jadu construction remodeling video"
                    className="w-full h-[450px] object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button
                      className="bg-brand-color-one text-white p-3 rounded-full"
                      aria-label="Play Video"
                    >
                      <svg
                        className="w-10 h-10 ml-1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 3l14 9-14 9V3z" />
                      </svg>
                    </button>
                  </div>
                </div>
              ) : (
                <video className="w-full h-[450px]" autoPlay loop muted>
                  <source
                    src={videoUrl || "/assets/videos/12.mp4"}
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
