import Image from "next/image";
import Link from "next/link";

import { MdOutlineMailOutline } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
export default function About() {
  return (
    <div className="mt-auto w-full max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 mx-auto">
      <div className="flex items-center gap-x-3">
        <div className="shrink-0">
          <Image
            className="shrink-0 size-16 rounded-full"
            src="/ricky-drohan.jpg"
            width={32}
            height={32}
            alt="Avatar"
          />
        </div>

        <div className="grow">
          <h1 className="text-lg font-medium text-gray-800 dark:text-neutral-200">
            Ricky Drohan
          </h1>
          <p className="text-sm text-gray-600 dark:text-neutral-400">
            Business Intelligence Developer &amp; Software Engineer
          </p>
        </div>
      </div>
      <div className="mt-8">
        <p className="text-md text-gray-600 dark:text-neutral-400">
          With over eight years of experience as a dedicated and versatile
          developer, I bring a strong track record in supporting and enhancing
          complex systems across multiple sites at Dawn Meats in Waterford. In
          my current role, I leverage a diverse tech stack to drive projects in
          business intelligence, database management, and web development, all
          tailored to meet the needs of the Dawn Meats Group. My work emphasizes
          quality, adaptability, and a commitment to continuous improvement.
        </p>

        <p className="mt-6 text-md text-gray-600 dark:text-neutral-400">
          Previously, I contributed significantly to SE2, where I joined as an
          Analyst in 2017. My role involved developing SQL scripts to analyze
          and manage data in client databases, generating reports, and crafting
          solutions to streamline client data operations.
        </p>

        <p className="mt-6 text-md text-gray-600 dark:text-neutral-400">
          My journey began at Walton Group, SETU Waterford, where, as an
          Associate Software Developer, I worked on EU-funded software
          initiatives using JavaScript and Python. This role, which evolved from
          an internship, complemented my Higher Diploma in Computer Science from
          SETU Waterford, an intensive program focused on equipping
          non-computing graduates with advanced technical skills.
        </p>

        <p className="mt-6 text-md text-gray-600 dark:text-neutral-400">
          Before transitioning to tech, I built a strong foundation in financial
          services at Sun Life and honed my digital marketing and administrative
          skills at SimplyInsure.ie. These diverse experiences contribute to my
          unique perspective, enabling me to adapt and succeed across various
          domains.
        </p>

        <ul className="mt-5 flex flex-col gap-y-3">
          <li className="flex items-center gap-x-2.5">
            <MdOutlineMailOutline />
            <Link
              className="text-[13px] text-gray-500 underline hover:text-gray-800 hover:decoration-2 focus:outline-none focus:decoration-2 dark:text-neutral-500 dark:hover:text-neutral-400"
              href="mailto:rdrohanirl@yahoo.ie"
            >
              rdrohanirl@yahoo.ie
            </Link>
          </li>

          <li className="flex items-center gap-x-2.5">
            <FaLinkedin />
            <Link
              className="text-[13px] text-gray-500 underline hover:text-gray-800 hover:decoration-2 focus:outline-none focus:decoration-2 dark:text-neutral-500 dark:hover:text-neutral-400"
              href="https://www.linkedin.com/in/rickydrohan"
            >
              rickydrohan
            </Link>
          </li>

          <li className="flex items-center gap-x-2.5">
            <FaGithub />
            <Link
              className="text-[13px] text-gray-500 underline hover:text-gray-800 hover:decoration-2 focus:outline-none focus:decoration-2 dark:text-neutral-500 dark:hover:text-neutral-400"
              href="https://www.github.com/RDrohan"
            >
              RDrohan
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
