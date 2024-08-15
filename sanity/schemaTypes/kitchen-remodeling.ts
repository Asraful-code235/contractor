import { defineField, defineType } from "sanity";

export const KitchenRemodelType = defineType({
  name: "kitchenRemodel",
  title: "Kitchen Remodel",
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
