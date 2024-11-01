import { FaUser } from "react-icons/fa";
import { FaComputer } from "react-icons/fa6";
import { FaFolderTree } from "react-icons/fa6";
import { GrContact } from "react-icons/gr";
export default function Menu() {
  const menuItems = [
    {
      icon: <FaUser size={48} />,
      title: "About",
      description:
        "Find out more about me and what I did before software development.",
      callToAction: "Who Am I?",
      link: "",
    },
    {
      icon: <FaComputer size={48} />,
      title: "Technologies",
      description: `See what languages and frameworks I've worked with since 2015.`,
      callToAction: "See My Skills",
      link: "",
    },
    {
      icon: <FaFolderTree size={48} />,
      title: "Projects",
      description: `Here's my projects I work on to keep my skills fresh.`,
      callToAction: "See My Projects",
      link: "",
    },
    {
      icon: <GrContact size={48} />,
      title: "Contacts",
      description: "Getting in touch is easy!",
      callToAction: "Contact Me",
      link: "",
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
          <div key={index} className="text-center">
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
              <a
                className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                href={item.link}
              >
                {item.callToAction}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
