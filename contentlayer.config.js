import {
  defineDocumentType,
  defineNestedType,
  makeSource,
} from "contentlayer/source-files";

const Condition = defineNestedType(() => ({
  name: "Condition",
  fields: {
    name: {
      type: "string",
      required: true,
    },
    linkedPage: {
      type: "string",
      required: false,
      description: "Another page slug such as 'ocd' or 'autism'",
    },
  },
}));

const Organization = defineNestedType(() => ({
  name: "Organization",
  fields: {
    name: {
      type: "string",
      required: true,
    },
    website: {
      type: "string",
      required: true,
      description: "URL to the website",
    },
    logo: {
      type: "string",
      required: true,
      description: "Logo URL",
    },
  },
}));

export const Event = defineDocumentType(() => ({
  name: "Event",
  filePathPattern: `./events/*.mdx`,
  contentType: "mdx",
  fields: {
    name: {
      type: "string",
      required: true,
    },
    startDate: {
      type: "date",
      required: true,
    },
    length: {
      type: "string",
      required: true,
      description: "day | month | week",
    },
    condition: {
      type: "nested",
      required: false,
      of: Condition,
    },
    organization: {
      type: "nested",
      required: false,
      of: Organization,
    },
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (event) => event._raw.sourceFileName.replace(".mdx", ""),
    },
  },
}));

const Meta = defineNestedType(() => ({
  name: "Meta",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    description: {
      type: "string",
      required: true,
    },
  },
}));

export const Page = defineDocumentType(() => ({
  name: "Page",
  filePathPattern: `./pages/*.mdx`,
  contentType: "mdx",
  fields: {
    name: {
      type: "string",
      required: true,
    },
    explaination: {
      type: "string",
      required: true,
    },
    meta: {
      type: "nested",
      of: Meta,
    },
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (page) => page._raw.sourceFileName.replace(".mdx", ""),
    },
  },
}));

export default makeSource({
  contentDirPath: "content",
  documentTypes: [Event, Page],
});
