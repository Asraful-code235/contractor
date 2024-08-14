import { defineField, defineType } from "sanity";

export const PaintingRemodelType = defineType({
  name: "paintingRemodel",
  title: "Painting Remodel",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "content",
      title: "Content",
      type: "blockContent",
    }),
  ],
});
