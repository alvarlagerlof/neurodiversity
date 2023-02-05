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
      description: "The title of the post",
      required: true,
    },
    linkedPage: {
      type: "string",
      description: "The title of the post",
      required: false,
    },
  },
}));

const Organization = defineNestedType(() => ({
  name: "Organization",
  fields: {
    name: {
      type: "string",
      description: "The title of the post",
      required: true,
    },
    website: {
      type: "string",
      description: "The title of the post",
      required: true,
    },
    logo: {
      type: "string",
      description: "The title of the post",
      required: true,
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
      description: "The title of the post",
      required: true,
    },
    startDate: {
      type: "date",
      description: "The date of the post",
      required: true,
    },
    length: {
      type: "string",
      description: "The title of the post",
      required: true,
    },
    condition: {
      type: "nested",
      of: Condition,
      required: false,
    },
    organization: {
      type: "nested",
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
      description: "The title of the post",
      required: true,
    },
    description: {
      type: "string",
      description: "The title of the post",
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
      description: "The title of the post",
      required: true,
    },
    explaination: {
      type: "string",
      description: "The title of the post",
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
