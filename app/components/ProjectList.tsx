import type { GithubRepo } from "../types";

type ApiRepo = {
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
};

async function getRepos(): Promise<GithubRepo[] | null> {
  try {
    const response = await fetch(
      "https://api.github.com/users/RDrohan/repos?per_page=100",
      {
        headers: { Accept: "application/vnd.github+json" },
        next: { revalidate: 3600 },
      }
    );
    if (!response.ok) return null;

    const data: ApiRepo[] = await response.json();
    return data.map((item) => ({
      name: item.name,
      url: item.html_url,
      description: item.description,
      language: item.language,
    }));
  } catch {
    return null;
  }
}

export default async function ProjectList() {
  const projects = await getRepos();

  if (!projects) {
    return (
      <p className="text-center text-gray-600 dark:text-neutral-400">
        Projects couldn&apos;t be loaded from GitHub right now. See them at{" "}
        <a
          className="text-blue-600 underline"
          href="https://www.github.com/RDrohan"
          target="_blank"
          rel="noopener noreferrer"
        >
          github.com/RDrohan
        </a>
        .
      </p>
    );
  }

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 items-center gap-12">
      {projects.map((item) => (
        <a
          className="group flex shrink-0 flex-col justify-center hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50 rounded-xl p-4 md:p-7 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          key={item.name}
        >
          <div className="mt-5">
            <h3 className="group-hover:text-gray-600 text-lg font-semibold text-gray-800 dark:text-white dark:group-hover:text-gray-400">
              {item.name}
            </h3>
            {item.description && (
              <p className="mt-1 text-gray-600 dark:text-neutral-400">
                {item.description}
              </p>
            )}
            {item.language && (
              <p className="mt-1 text-gray-600 dark:text-neutral-400">
                <span className="inline-flex items-center gap-x-1.5 py-1.5 px-3 mb-2 mr-1 rounded-full text-xs font-medium border border-gray-800 text-gray-800 dark:border-neutral-200 dark:text-white">
                  {item.language}
                </span>
              </p>
            )}
            <span className="mt-2 inline-flex items-center gap-x-1.5 text-sm text-blue-600 decoration-2 group-hover:underline group-focus:underline font-medium">
              See Repo
            </span>
          </div>
        </a>
      ))}
    </div>
  );
}
