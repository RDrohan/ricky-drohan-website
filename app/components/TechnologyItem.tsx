import { TechnologyItemProps } from "../types";

export default function TechnologyItem({ item }: TechnologyItemProps) {
  return (
    <div className="flex flex-col rounded-xl p-4 md:p-6 bg-white border border-gray-200 dark:bg-neutral-900 dark:border-neutral-700">
      <div className="flex items-center gap-x-4">
        {item.icon}
        <div className="grow">
          <h3 className="font-medium text-gray-800 dark:text-neutral-200">
            {item.title}
          </h3>
        </div>
      </div>

      <p className="mt-3 text-gray-500 dark:text-neutral-500">
        {item.description}
      </p>
      <p className="mt-3 text-gray-500 dark:text-neutral-500">
        {item.tools.map((tool, index) => (
          <span
            key={index}
            className="inline-flex items-center gap-x-1.5 py-1.5 p-3 mb-2 mr-1 rounded-full text-xs font-medium border border-gray-800 text-gray-800 dark:border-neutral-200 dark:text-white"
          >
            {tool}
          </span>
        ))}
      </p>
    </div>
  );
}
