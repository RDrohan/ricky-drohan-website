import "./globals.css";

import PrelineScript from "./components/PrelineScript";
import Navbar from "./components/Navbar";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <div className="max-w-[85rem] w-full mx-auto pt-4 px-4 sm:flex sm:items-center sm:justify-between">
          {children}
        </div>
      </body>
      <PrelineScript />
    </html>
  );
}
