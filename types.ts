export interface Page {
  slug: string;
  content: string;
  frontMatter: {
    name: string;
    explaination: string;
    meta: {
      title: string;
      description: string;
    };
    published: boolean;
  };
}

export interface Event {
  slug: string;
  frontMatter: {
    name: string;
    conditionName?: string;
    length: "day" | "week" | "month";
    startDate: string;
    organization?: {
      name: string;
      website: string;
    };
    linkedPage?: string;
  };
}

export interface EventAndPage {
  event: Event;
  page: Page;
}

export interface EventSectioned {
  [month: number]: EventAndPage[];
}
