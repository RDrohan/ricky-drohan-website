import { MdOutlineMailOutline } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { FaPhone } from "react-icons/fa6";

import Form from "../components/Form";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
};

export default function Contact() {
  return (
    <div className="mt-auto w-full max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 mx-auto">
      <div className="max-w-7xl px-4 lg:px-6 py-12 lg:py-24 mx-auto">
        <div className="mb-6 sm:mb-10 max-w-2xl text-center mx-auto">
          <h2 className="font-medium text-black text-2xl sm:text-4xl dark:text-white">
            Contact
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 lg:items-center gap-6 md:gap-8 lg:gap-12">
          <div className="space-y-8 lg:space-y-16">
            <Form />
          </div>

          <div className="space-y-8 lg:space-y-16">
            <div>
              <h3 className="mb-5 font-semibold text-black dark:text-white">
                My Address
              </h3>

              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-12">
                <div className="flex gap-4">
                  <CiLocationOn size={16} />

                  <div className="grow">
                    <p className="text-sm text-gray-600 dark:text-neutral-400">
                      Ireland
                    </p>
                    <address className="mt-1 text-black not-italic dark:text-white">
                      2 Estuary Wood, Ferrybank, Waterford, X91KXV3
                    </address>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="mb-5 font-semibold text-black dark:text-white">
                Get In Touch
              </h3>

              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-12">
                <div className="flex gap-4">
                  <MdOutlineMailOutline size={16} />

                  <div className="grow">
                    <p className="text-sm text-gray-600 dark:text-neutral-400">
                      Email
                    </p>
                    <p>
                      <a
                        className="relative inline-block font-medium text-black focus:outline-none focus:before:bg-black dark:text-white"
                        href="mailto:rdrohanirl@yahoo.ie"
                      >
                        rdrohanirl@yahoo.ie
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <FaPhone size={16} />

                  <div className="grow">
                    <p className="text-sm text-gray-600 dark:text-neutral-400">
                      Call
                    </p>
                    <p>
                      <a
                        className="relative inline-block font-medium text-black focus:outline-none focus:before:bg-black dark:text-white"
                        href="tel:+353879124961"
                      >
                        +353 87 9124961
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
