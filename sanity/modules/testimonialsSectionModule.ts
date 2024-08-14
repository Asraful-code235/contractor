import { defineField, defineType } from "sanity";

export const testimonialsSectionType = defineType({
  name: "testimonialsSection",
  title: "Testimonials Section",
  type: "object",
  fields: [
    defineField({
      name: "sectionHeader",
      title: "Section Header",
      type: "string",
    }),
    defineField({
      name: "subheader",
      title: "Subheader",
      type: "string",
    }),
    defineField({
      name: "testimonials",
      title: "Testimonials",
      type: "array",
      of: [{ type: "reference", to: { type: "testimonial" } }],
    }),
  ],
});
