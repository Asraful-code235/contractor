import { TagIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const homeType = defineType({
  name: "home",
  title: "Home",
  type: "document",
  icon: TagIcon,
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "subtitle",
      title: "Subtitle",
      type: "string",
    }),
    defineField({
      name: "ctaText",
      title: "CTA Text",
      type: "string",
    }),
    defineField({
      name: "url",
      title: "URL",
      type: "string",
    }),
    defineField({
      name: "contentModules",
      title: "Page Content",
      type: "array",
      of: [
        { type: "ourWork" },
        { type: "servicesModule" },
        { type: "showcaseProject" },
        { type: "testimonialsSection" },
      ],
    }),
  ],
});
