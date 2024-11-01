"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <div className="relative overflow-hidden">
      <div
        className="relative z-10 bg-center bg-cover bg-no-repeat"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.7)), url('/waterford.jpg')",
        }}
      >
        <div className="max-w-[85rem] h-[50vh] sm:h-[60vh] flex items-center mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
          <div className="max-w-2xl text-center mx-auto">
            <div className="mt-5 max-w-2xl">
              <h1 className="block font-semibold text-black text-4xl md:text-5xl lg:text-6xl dark:text-neutral-200">
                Welcome To My Website
              </h1>
            </div>
            <div className="mt-5 max-w-3xl">
              <p className="text-lg text-black dark:text-neutral-400">
                With 8+ years in full-stack development and data management, I
                build reliable, scalable solutions tailored to meet your
                needs—delivering high-quality code, custom applications, and
                impactful web solutions.
              </p>
            </div>

            <div className="mt-8 gap-3 flex justify-center">
              <Link
                className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                href="/about"
              >
                Read More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
