
import { CourseModule } from "./course-module";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function LeftSideBar() {
  const sampleLessons: Lesson[] = [
    {
      id: "1",
      title: "Variables and Scope",
      duration: "15 min",
      type: "video",
      completed: true,
    },
    {
      id: "2",
      title: "Functions Deep Dive",
      duration: "20 min",
      type: "video",
      completed: false,
    },
    {
      id: "3",
      title: "Objects and Arrays",
      duration: "10 min",
      type: "reading",
      completed: true,
    },
  ];

  return (
    <div className="flex w-full max-w-sm flex-col gap-6">
      <Tabs defaultValue="account">
        <TabsList>
          <TabsTrigger value="course-content">Course Content</TabsTrigger>
          <TabsTrigger value="notes">Notes</TabsTrigger>
        </TabsList>
        <TabsContent value="course-content">
          <CourseModule
            title="JavaScript Fundamentals Review"
            totalLessons={3}
            totalDuration="45 min"
            lessons={sampleLessons}
            defaultExpanded={true}
            // isLoading={isLoading}
            loadingText="Fetching course content..."
          />
        </TabsContent>
        <TabsContent value="notes"></TabsContent>
      </Tabs>
    </div>
  );
}




