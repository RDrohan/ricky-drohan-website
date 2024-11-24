"use client";

import { useFormik } from "formik";
import { schema } from "./../schema";
import { toast } from "react-hot-toast";
export default function Form() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: schema,
    onSubmit: async (values, actions) => {
      const { name, email, message } = values;
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_ACCESS_KEY,
          name,
          email,
          message,
        }),
      });

      if (response.ok) {
        toast.success("Email successfully resent. Thank you!");
      } else {
        toast.error("Failed to send email. Try again another time.");
      }
      actions.resetForm();
    },
  });

  const { errors, touched, values, handleChange, handleSubmit } = formik;

  return (
    <div className="mx-auto max-w-2xl">
      <div className="text-center">
        <h2 className="text-xl text-gray-800 font-bold sm:text-3xl dark:text-white">
          Get In Touch!
        </h2>
      </div>
      <div className="mt-5 p-4 relative z-10 bg-white border rounded-xl sm:mt-10 md:p-10 dark:bg-neutral-900 dark:border-neutral-700">
        <form onSubmit={handleSubmit}>
          <div className="mb-4 sm:mb-8">
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium dark:text-white"
            >
              Full Name
            </label>
            <input
              type="text"
              name="name"
              className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
              placeholder="Your full name"
              value={values.name}
              onChange={handleChange}
            />
            {touched.name && errors.name && (
              <div className="text-bold text-red-700">{errors.name}</div>
            )}
          </div>
          <div className="mb-4 sm:mb-8">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium dark:text-white"
            >
              Email
            </label>
            <input
              type="text"
              name="email"
              className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
              placeholder="email@example.com"
              value={values.email}
              onChange={handleChange}
            />
            {touched.email && errors.email && (
              <div className="text-bold text-red-700">{errors.email}</div>
            )}
          </div>
          <div className="mb-4 sm:mb-8">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium dark:text-white"
            >
              Message
            </label>
            <textarea
              name="message"
              className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
              rows={3}
              placeholder="Enter Message"
              value={values.message}
              onChange={handleChange}
            ></textarea>
            {touched.message && errors.message && (
              <div className="text-bold text-red-700">{errors.message}</div>
            )}
          </div>
          <div className="mt-6 grid">
            <button
              type="submit"
              className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
            >
              Submit Form
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
