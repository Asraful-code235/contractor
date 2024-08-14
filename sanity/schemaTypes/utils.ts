import { TagIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const utilityType = defineType({
  name: "utility",
  title: "Utility",
  type: "document",
  icon: TagIcon,
  fields: [
    defineField({
      name: "bannerText",
      title: "Banner Text",
      type: "string",
    }),
    defineField({
      name: "socialMediaLinks",
      title: "Social Media Links",
      type: "object",
      fields: [
        defineField({
          name: "faUrl",
          title: "Facebook Link",
          type: "url",
        }),
        defineField({
          name: "youtubeUrl",
          title: "Youtube Link",
          type: "url",
        }),
        defineField({
          name: "instagramUrl",
          title: "Instagram Link",
          type: "url",
        }),
        defineField({
          name: "twitterUrl",
          title: "Twitter Link",
          type: "url",
        }),
        defineField({
          name: "linkedInUrl",
          title: "LinkedIn Link",
          type: "url",
        }),
        defineField({
          name: "pinterestUrl",
          title: "Pinterest Link",
          type: "url",
        }),
      ],
    }),
    defineField({
      name: "footerLinks",
      title: "Footer Links",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "title",
              title: "Title",
              type: "string",
            }),
            defineField({
              name: "socialMediaLink",
              title: "Social Media Link",
              type: "url",
            }),
          ],
        },
      ],
    }),
    defineField({
      name: "contactNumber",
      title: "Contact Number",
      type: "string",
    }),
    defineField({
      name: "scheduleTime",
      title: "Schedule Time",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "email",
      title: "Email",
      type: "string",
    }),
  ],
});
