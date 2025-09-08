type Lesson = {
    id: string;
    title: string;
    duration: string;
    type: "video" | "reading";
    completed?: boolean;
  }