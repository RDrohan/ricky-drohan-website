"use client";

import { useFormik } from "formik";
import { toast } from "react-hot-toast";

import { schema } from "../schema";

const inputClasses =
  "py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600";

const labelClasses = "block mb-2 text-sm font-medium dark:text-white";

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

      try {
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
          toast.success("Email successfully sent. Thank you!");
          actions.resetForm();
        } else {
          toast.error("Failed to send email. Try again another time.");
        }
      } catch {
        toast.error("Failed to send email. Try again another time.");
      }
    },
  });

  const {
    errors,
    touched,
    values,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
  } = formik;

  return (
    <div className="mx-auto max-w-2xl">
      <div className="text-center">
        <h2 className="text-xl text-gray-800 font-bold sm:text-3xl dark:text-white">
          Get In Touch!
        </h2>
      </div>
      <div className="mt-5 p-4 relative z-10 bg-white border rounded-xl sm:mt-10 md:p-10 dark:bg-neutral-900 dark:border-neutral-700">
        <form onSubmit={handleSubmit} noValidate>
          <div className="mb-4 sm:mb-8">
            <label htmlFor="name" className={labelClasses}>
              Full Name
            </label>
            <input
              id="name"
              type="text"
              name="name"
              autoComplete="name"
              className={inputClasses}
              placeholder="Your full name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.name && errors.name && (
              <div className="font-bold text-red-700">{errors.name}</div>
            )}
          </div>
          <div className="mb-4 sm:mb-8">
            <label htmlFor="email" className={labelClasses}>
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              autoComplete="email"
              className={inputClasses}
              placeholder="email@example.com"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.email && errors.email && (
              <div className="font-bold text-red-700">{errors.email}</div>
            )}
          </div>
          <div className="mb-4 sm:mb-8">
            <label htmlFor="message" className={labelClasses}>
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className={inputClasses}
              rows={3}
              placeholder="Enter Message"
              value={values.message}
              onChange={handleChange}
              onBlur={handleBlur}
            ></textarea>
            {touched.message && errors.message && (
              <div className="font-bold text-red-700">{errors.message}</div>
            )}
          </div>
          <div className="mt-6 grid">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-hidden focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
            >
              {isSubmitting ? "Sending..." : "Submit Form"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
