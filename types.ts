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
  };
}

export interface Event {
  slug: string;
  frontMatter: {
    name: string;
    length: "day" | "week" | "month";
    startDate: string;
    organization?: {
      name: string;
      website: string;
      logo: string;
    };
    condition: {
      name: string;
      linkedPage?: string;
    };
  };
}

export interface EventAndPage {
  event: Event;
  page: Page;
}

export interface EventSectioned {
  [month: number]: EventAndPage[];
}
