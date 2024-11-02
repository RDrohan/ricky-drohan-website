import { FaUser } from "react-icons/fa";
import { FaComputer } from "react-icons/fa6";
import { FaFolderTree } from "react-icons/fa6";
import { GrContact } from "react-icons/gr";

import MenuItem from "./MenuItem";

import { Item } from "../types";

export default function Menu() {
  const menuItems: Item[] = [
    {
      icon: <FaUser size={48} />,
      title: "About",
      description:
        "Find out more about me and what I did before software development.",
      callToAction: "Who Am I?",
      link: "/about",
    },
    {
      icon: <FaComputer size={48} />,
      title: "Technologies",
      description: `See what languages and frameworks I've worked with since 2015.`,
      callToAction: "See My Skills",
      link: "/technologies",
    },
    {
      icon: <FaFolderTree size={48} />,
      title: "Projects",
      description: `Here's my projects I work on to keep my skills fresh.`,
      callToAction: "See My Projects",
      link: "/projects",
    },
    {
      icon: <GrContact size={48} />,
      title: "Contacts",
      description: "Getting in touch is easy!",
      callToAction: "Contact Me",
      link: "/contact",
    },
  ];

  return (
    <div className="max-w-[85rem] p-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="max-w-2xl mx-auto text-center p-6">
        <h2 className="text-2xl font-bold sm:text-3xl md:text-4xl dark:text-white">
          Menu
        </h2>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 items-center gap-12">
        {menuItems.map((item, index) => (
          <MenuItem key={index} item={item} />
        ))}
      </div>
    </div>
  );
}
