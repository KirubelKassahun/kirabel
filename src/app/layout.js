import localFont from "next/font/local";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "Kirubel Kassahun - Full Stack Developer",
  description:
    "Kirubel Kassahun is a distinguished Full Stack Developer with expertise in web and mobile application development. Explore his projects and skills in Flutter, JavaScript, Node.js, and more.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
