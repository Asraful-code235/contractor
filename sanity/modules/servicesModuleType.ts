import { UserIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const servicesModuleType = defineType({
  name: "servicesModule",
  title: "Services Module",
  type: "object",
  icon: UserIcon,
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
      name: "services",
      title: "Services",
      type: "array",
      of: [{ type: "reference", to: { type: "service" } }],
      options: {
        sortable: true,
      },
    }),
  ],
});
