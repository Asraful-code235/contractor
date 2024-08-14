import { DocumentTextIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const ourWork = defineType({
  name: "ourWork",
  title: "Our Work",
  type: "object",
  icon: DocumentTextIcon,
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
      name: "counts",
      title: "Counts",
      type: "object",
      fields: [
        defineField({
          name: "companyPropertyCount",
          title: "Company Property Count",
          type: "number",
        }),
        defineField({
          name: "renovatedProperties",
          title: "Renovated Properties",
          type: "number",
        }),
        defineField({
          name: "happyClients",
          title: "Happy Clients",
          type: "number",
        }),
        defineField({
          name: "completedJobs",
          title: "Completed Jobs",
          type: "number",
        }),
      ],
    }),
  ],
});
