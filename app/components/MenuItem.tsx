import Link from "next/link";

import { MenuItemProps } from "../types";

export default function MenuItem({ item }: MenuItemProps) {
  return (
    <div className="text-center">
      <div className="flex justify-center items-center size-12 bg-gray-50 border border-gray-200 rounded-full mx-auto dark:bg-neutral-800 dark:border-neutral-700">
        {item.icon}
      </div>
      <div className="mt-3">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
          {item.title}
        </h3>
        <p className="mt-1 text-gray-600 dark:text-neutral-400">
          {item.description}
        </p>
      </div>
      <div className="mt-8 gap-3 flex justify-center">
        <Link
          className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
          href={item.link}
        >
          {item.callToAction}
        </Link>
      </div>
    </div>
  );
}
