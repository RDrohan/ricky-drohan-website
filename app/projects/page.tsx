import ProjectList from "../components/ProjectList";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
};
export default function Projects() {
  return (
    <div className="max-w-[85rem] p-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="max-w-2xl mx-auto text-center p-6">
        <h2 className="text-2xl font-bold sm:text-3xl md:text-4xl dark:text-white">
          My Projects
        </h2>
      </div>
      <ProjectList />
    </div>
  );
}
