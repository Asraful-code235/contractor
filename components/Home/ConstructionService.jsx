import Image from "next/image";
import Heading from "../shared/Heading";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import Link from "next/link";

const services = [
  {
    id: "1",
    image: "/assets/images/jadoconstruction-image-01.webp",
    title: "Plumbing Contractor",
    description:
      "At Jadu Construction, we provide comprehensive plumbing services designed to meet the needs of both residential and commercial properties. Our experienced team of licensed plumbers is equipped to handle everything from routine maintenance and minor repairs to complex installations and emergency services. Whether you’re dealing with a leaky faucet, need a new water heater, or require a full plumbing system overhaul, we ensure the highest quality workmanship and customer service. Trust us to keep your plumbing running smoothly and efficiently, so you can focus on what matters most.",
    link: "/",
  },
  {
    id: "2",
    image: "/assets/images/jadoconstruction-image-02.webp",
    title: "Remodeling Contractor",
    description:
      "Transform your living spaces with our expert remodeling services. Whether you're looking to revamp your kitchen, modernize your bathroom, finish your basement, or tackle another home improvement project, our skilled team is here to bring your vision to life. We specialize in creating beautiful, functional spaces tailored to your needs and style. From initial design to final touches, we manage every aspect of the remodel, ensuring a seamless experience and exceptional results that exceed your expectations.",
    link: "/",
  },
  {
    id: "3",
    image: "/assets/images/jadoconstruction-image-03.webp",
    title: "Kitchen Remodeling Contractor",
    description:
      "At Jadu Construction, we specialize in transforming kitchens into stunning, functional spaces tailored to the needs of residential properties. Our kitchen remodeling services are designed to enhance the heart of your home, whether you're looking for a modern update, a classic renovation, or a completely new layout. From custom cabinetry and countertops to innovative storage solutions and state-of-the-art appliances, we manage every detail with precision and care. Let us help you create the kitchen of your dreams, where style meets functionality.",
    link: "/",
  },
  {
    id: "4",
    image: "/assets/images/jadoconstruction-image-04.webp",
    title: "New Construction Contractor",
    description:
      "Revitalize your bathroom with our expert remodeling services. We specialize in shower, tub, and vanity installations that combine style and functionality to create a spa-like experience in your home. Whether you’re looking to upgrade to a luxurious walk-in shower, install a modern tub, or enhance your space with a custom vanity, our team is dedicated to delivering high-quality craftsmanship and attention to detail. Transform your bathroom into a relaxing retreat with our tailored remodeling solutions.",
    link: "/",
  },
];

export default function ConstructionService() {
  return (
    <div className="py-8 px-2 lg:py-[94px] container mx-auto">
      <Heading
        title="Our service"
        description="Licensed, Insured, and Excellent Residential Remodeling & New Construction Services"
      />
      <div className="mt-10 lg:mt-20">
        <div className="flex flex-col gap-8 lg:gap-16 justify-center">
          {services.map((service, i) => (
            <div
              key={service.id}
              className={cn(
                "flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-16",
                i % 2 === 0 ? "lg:flex-row-reverse" : ""
              )}
            >
              <div className="lg:w-fit w-full">
                <Image
                  className="w-full h-full"
                  src={service.image}
                  alt={service.title}
                  width={600}
                  height={600}
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
                  <Link href={service.link}>
                    <Button
                      size="lg"
                      className="bg-brand-color-one text-black hover:text-white uppercase font-semibold"
                    >
                      Explore
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
