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
    event?: Event;
    published: boolean;
  };
}

export interface Event {
  name: string;
  length: "day" | "week" | "month";
  startDate: number;
}

export interface EventSectioned {
  [month: number]: Event[];
}
