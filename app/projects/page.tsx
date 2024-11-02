"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { GithubRepo } from "../types";

export default function Projects() {
  const [projects, setProjects] = useState<GithubRepo[]>([]);

  useEffect(() => {
    fetch("/api/projects")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProjects(data);
      });
  }, []);

  return (
    <div className="max-w-[85rem] p-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="max-w-2xl mx-auto text-center p-6">
        <h2 className="text-2xl font-bold sm:text-3xl md:text-4xl dark:text-white">
          My Projects
        </h2>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 items-center gap-12">
        {projects.map((item, index) => (
          <Link
            className="group flex shrink-0 flex-col justify-center hover:bg-gray-50 focus:outline-none focus:bg-gray-50 rounded-xl p-4 md:p-7 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
            href={item.url}
            key={index}
          >
            <div className="mt-5">
              <h3 className="group-hover:text-gray-600 text-lg font-semibold text-gray-800 dark:text-white dark:group-hover:text-gray-400">
                {item.name}
              </h3>
              <p className="mt-1 text-gray-600 dark:text-neutral-400">
                {item.description}
              </p>
              <p className="mt-1 text-gray-600 dark:text-neutral-400">
                <span className="inline-flex items-center gap-x-1.5 py-1.5 p-3 mb-2 mr-1 rounded-full text-xs font-medium border border-gray-800 text-gray-800 dark:border-neutral-200 dark:text-white">
                  {item.language}
                </span>
              </p>
              <span className="mt-2 inline-flex items-center gap-x-1.5 text-sm text-blue-600 decoration-2 group-hover:underline group-focus:underline font-medium">
                See Repo
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
