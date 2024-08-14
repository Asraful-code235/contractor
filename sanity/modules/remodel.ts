import { TagIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const showcaseProjectType = defineType({
  name: "showcaseProject",
  title: "Showcase Project Remodel",
  type: "object",
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
      name: "showcaseTitle",
      title: "Showcase Project Title",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),

    defineField({
      name: "video",
      title: "Video Uploader",
      type: "file",
      options: {
        accept: "video/*",
      },
    }),
  ],
});
