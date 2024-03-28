import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "./components/nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "To Do List",
  description: "To Do List by using React.js & Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} flex flex-col items-center p-4 md:p-0 relative`}
      >
        <Nav />
        {children}
      </body>
    </html>
  );
}
