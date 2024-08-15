import Image from "next/image";
import Heading from "../shared/Heading";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import Link from "next/link";
import { urlForImage } from "@/sanity/lib/image";

export default function ConstructionService({ module }) {
  return (
    <div className="py-8 px-6 lg:py-[94px] container mx-auto">
      <Heading
        title="Our service"
        description="Licensed, Insured, and Excellent Residential Remodeling & New Construction Services"
      />
      <div className="mt-10 lg:mt-20">
        <div className="flex flex-col gap-8 lg:gap-16 justify-center">
          {module?.services?.map((service, i) => {
            const imageProps =
              service && service?.image ? urlForImage(service.image) : null;

            return (
              <div
                key={service._id}
                className={cn(
                  "flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-16",
                  i % 2 === 0 ? "lg:flex-row-reverse" : ""
                )}
              >
                <div className="lg:w-fit w-full">
                  <Image
                    className="w-full h-full"
                    {...(service.image.blurDataURL && {
                      placeholder: "blur",
                      blurDataURL: service.image.blurDataURL,
                    })}
                    src={imageProps.src}
                    alt={service.title}
                    width={800}
                    height={800}
                    decoding="async"
                    priority
                  />
                </div>
                <div className="space-y-3 lg:space-y-6 w-full lg:w-[40%]">
                  <h3 className="text-2xl lg:text-4xl font-bold">
                    {service.title}
                  </h3>
                  <p className="text-gray-500 lg:text-base text-sm">
                    {service.description}
                  </p>
                  <div>
                    <Link href={service?.ctaLink || "/"} target="_blank">
                      <Button
                        size="lg"
                        className="bg-brand-color-one text-black hover:text-white uppercase font-semibold"
                      >
                        {service?.ctaText}
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
