"use client";

import Heading from "../shared/Heading";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

export default function CustomerTestimonials({ module }) {
  return (
    <div className="py-8 px-6 lg:py-[94px] container mx-auto">
      <div>
        <Heading
          title={module?.sectionHeader || "What People Say About Us"}
          description={module?.subheader || "Bathroom Remodeled"}
        />
      </div>
      <div className="mt-8 lg:mt-16">
        <Carousel className="w-8/12 lg:w-3/5 mx-auto">
          <CarouselContent>
            {module?.testimonials?.map((testimonial) => (
              <CarouselItem key={testimonial._id}>
                <div className="p-1 flex flex-col gap-4">
                  <q className="max-lg:text-xs text-left lg:text-center leading-7">
                    {testimonial.quote}
                  </q>

                  <h3 className="text-sm lg:text-xl font-semibold text-center">
                    {testimonial.name}
                  </h3>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
}
