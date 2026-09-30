import { defineField, defineType } from "sanity";

export default defineType({
  name: "certification",
  title: "Certification",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Certification Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "issuer",
      title: "Issuing Organization",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "date",
      title: "Date Issued",
      type: "date",
      options: {
        dateFormat: "YYYY-MM",
      },
    }),
    defineField({
      name: "credentialId",
      title: "Credential ID",
      type: "string",
    }),
    defineField({
      name: "credentialUrl",
      title: "Credential URL",
      type: "url",
    }),
    defineField({
      name: "description",
      title: "Description or Skills Acquired",
      type: "text",
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "issuer",
    },
  },
});
