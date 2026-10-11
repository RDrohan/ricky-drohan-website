import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const socialClasses =
  "size-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-500 hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700";

export default function Footer() {
  const currentYear: number = new Date().getFullYear();

  return (
    <footer className="mt-auto w-full max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 mx-auto">
      <div className="text-center">
        <div>
          <Link
            className="flex-none text-xl font-semibold text-black dark:text-white"
            href="/"
            aria-label="Brand"
          >
            Ricky Drohan
          </Link>
        </div>

        <div className="mt-3">
          <p className="text-gray-500 dark:text-neutral-500">
            Copyright © 2018-{currentYear}. All Rights Reserved.
          </p>
        </div>

        <div className="mt-3 space-x-2">
          <a
            className={socialClasses}
            href="https://www.linkedin.com/in/rickydrohan"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            className={socialClasses}
            href="https://www.github.com/RDrohan"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </footer>
  );
}
