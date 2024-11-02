import { FaChartArea } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaPython } from "react-icons/fa";

import { Technology } from "../types";
import TechnologyItem from "../components/TechnologyItem";

export default function Technologies() {
  const technologies: Technology[] = [
    {
      icon: <FaChartArea size={48} />,
      title: "Business Intelligence (BI)",
      description:
        "In my current job in Dawn Meats, I have gotten vast experience in Business Intelligence tools primarily extracting SQL-based data sources and creating rich charts, visualisations and reports in a range of tools.",
      tools: ["QlikView", "QlikSense", "NPrinting", "Microsoft SSRS"],
    },
    {
      icon: <FaDatabase size={48} />,
      title: "Databases",
      description:
        "I gained experience with both relational and non-relational databases as well as using a range of ORMs to manage application data.",
      tools: [
        "MSSQL Server",
        "MySQL",
        "PostgreSQL",
        "SQLite",
        "Mongoose",
        "Prisma",
        "Firebase",
      ],
    },
    {
      icon: <FaCode size={48} />,
      title: "CSS Frameworks",
      description:
        "I worked with various CSS frameworks during my time at the Walton Institute along with continued independent learning outside of work.",
      tools: [
        "Tailwind CSS",
        "Preline",
        "DaisyUI",
        "Semantic UI",
        "Bootstrap",
        "Angular Material",
      ],
    },
    {
      icon: <IoLogoJavascript size={48} />,
      title: "JavaScript",
      description:
        "Most of my full-stack development experience is in JavaScript and I have worked on many frameworks both professionally and in my own time.",
      tools: [
        "Next.js",
        "Angular 1.x",
        "Angular 2+",
        "React",
        "Vue.js",
        "Node.js",
        "Express.js",
        "Svelte",
      ],
    },
    {
      icon: <FaPython size={48} />,
      title: "Python",
      description:
        "I have commercial experience with Python through developing a SDN web application.",
      tools: ["Django", "Beautiful Soup"],
    },
  ];

  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
        <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">
          Technologies
        </h2>
        <p className="mt-1 text-gray-600 dark:text-neutral-400">
          I have over 8 years experience in full-stack, database and Business
          Intelligence (BI) development. Over that time, I worked with many
          frameworks and languages, all of which are detailed below!
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {technologies.map((item, index) => (
          <TechnologyItem key={index} item={item} />
        ))}
      </div>
    </div>
  );
}