import { defineField, defineType } from "sanity";

export const bathroomRemodelType = defineType({
  name: "bathroomRemodel",
  title: "Bathroom Remodel",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: {
        source: "title",
      },
    }),
    defineField({
      name: "content",
      title: "Content",
      type: "blockContent",
    }),
  ],
});
