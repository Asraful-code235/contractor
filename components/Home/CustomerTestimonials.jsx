import Heading from "../shared/Heading";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
  },
  {
    id: 2,
    name: "Jane Doe",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
  },
  {
    id: 3,
    name: "John Smith",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
  },
];

export default function CustomerTestimonials() {
  return (
    <div className="py-8 px-6 lg:py-[94px] container mx-auto">
      <div>
        <Heading
          title="What People Say About Us"
          description="Bathroom Remodeled"
        />
      </div>
      <div className="mt-8 lg:mt-16">
        <Carousel className="w-8/12 lg:w-3/5 mx-auto">
          <CarouselContent>
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.id}>
                <div className="p-1">
                  <q className="max-lg:text-xs text-left lg:text-center leading-3 ">
                    {testimonial.review}
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
