import { defineField, defineType } from "sanity";

export const project = defineType({
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "summary",
      title: "Summary",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "mainImage",
      title: "Main Image",
      type: "image",
      description: "Primary cover image for the project card",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          title: "Alt Text",
          type: "string",
        }),
      ],
    }),
    defineField({
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "string" }],
      options: {
        list: [
          { title: "ESP32", value: "ESP32" },
          { title: "STM32", value: "STM32" },
          { title: "ATmega328P", value: "ATmega328P" },
          { title: "MCU", value: "MCU" },
          { title: "FreeRTOS", value: "FreeRTOS" },
          { title: "RTOS", value: "RTOS" },
          { title: "PCB", value: "PCB" },
          { title: "BLE", value: "BLE" },
          { title: "Zigbee", value: "Zigbee" },
          { title: "FPGA", value: "FPGA" },
          { title: "Analog Design", value: "Analog Design" },
          { title: "Firmware", value: "Firmware" },
          { title: "IoT", value: "IoT" },
          { title: "SIM800C", value: "SIM800C" },
          { title: "GPS/GSM", value: "GPS/GSM" },
          { title: "GPRS", value: "GPRS" },
          { title: "Cold Chain", value: "Cold Chain" },
          { title: "BMS", value: "BMS" },
          { title: "Energy Metering", value: "Energy Metering" },
          { title: "Raspberry Pi", value: "Raspberry Pi" },
          { title: "Azure Cloud", value: "Azure Cloud" },
          { title: "ThingsCloud", value: "ThingsCloud" },
          { title: "SPI/I2C/UART", value: "SPI/I2C/UART" },
          { title: "OneWire/SPI", value: "OneWire/SPI" },
          { title: "Award Winner", value: "Award Winner" },
        ],
      },
    }),
    defineField({
      name: "specs",
      title: "Specifications Table",
      type: "array",
      of: [
        {
          type: "object",
          name: "specItem",
          title: "Spec Item",
          fields: [
            defineField({
              name: "key",
              title: "Key/Feature",
              type: "string",
            }),
            defineField({
              name: "value",
              title: "Value/Description",
              type: "string",
            }),
          ],
        },
      ],
    }),
    defineField({
      name: "bom",
      title: "Bill of Materials (BOM)",
      type: "array",
      of: [
        {
          type: "object",
          name: "bomItem",
          title: "BOM Item",
          fields: [
            defineField({
              name: "component",
              title: "Component Name",
              type: "string",
            }),
            defineField({
              name: "designator",
              title: "Designator (e.g. C1, R3)",
              type: "string",
            }),
            defineField({
              name: "partNumber",
              title: "MPN / Part Number",
              type: "string",
            }),
            defineField({
              name: "quantity",
              title: "Quantity",
              type: "number",
            }),
            defineField({
              name: "link",
              title: "Datasheet / Supplier Link",
              type: "url",
            }),
          ],
        },
      ],
    }),
    defineField({
      name: "githubRepo",
      title: "GitHub Repository URL",
      type: "url",
    }),
    defineField({
      name: "schematicUrl",
      title: "Schematic / CAD Link",
      type: "url",
    }),
    defineField({
      name: "gallery",
      title: "Image Gallery",
      type: "array",
      of: [
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            defineField({
              name: "caption",
              title: "Caption",
              type: "string",
            }),
            defineField({
              name: "alt",
              title: "Alt Text",
              type: "string",
            }),
          ],
        },
      ],
    }),
    defineField({
      name: "body",
      title: "MDX Body",
      type: "array",
      of: [
        { type: "block" },
        { type: "image" },
        {
          type: "code",
          title: "Code Snippet",
          options: {
            withFilename: true,
          },
        },
      ],
    }),
    defineField({
      name: "publishedAt",
      title: "Published At",
      type: "datetime",
    }),
  ],
});
