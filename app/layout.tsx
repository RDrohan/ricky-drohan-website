import "./globals.css";

import PrelineScript from "./components/PrelineScript";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import type { Metadata } from "next";
import { Toaster } from "react-hot-toast";

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
      <body>
        <Navbar />
        <Toaster position="top-center" />
        <div className="w-full h-full mx-auto">{children}</div>
        <Footer />
      </body>
      <PrelineScript />
    </html>
  );
}
