import "./globals.css";

import type { Metadata } from "next";
import { Toaster } from "react-hot-toast";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import PrelineClient from "./components/PrelineClient";

export const metadata: Metadata = {
  title: {
    template: "%s | Ricky Drohan",
    default: "Main | Ricky Drohan",
  },
  description:
    "Ricky Drohan is an experienced developer in system support, BI, SQL, and web development. Skilled in data analysis, JavaScript, Python, and more.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col">
        <Navbar />
        <Toaster position="top-center" />
        <main className="w-full flex-1 mx-auto">{children}</main>
        <Footer />
        <PrelineClient />
      </body>
    </html>
  );
}
