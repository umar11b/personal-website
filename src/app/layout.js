import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Umar Zaman | Cloud Security Engineer & Developer",
  description:
    "Personal portfolio website showcasing my work in cloud security and software development",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-[#121212] text-white`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
      </body>
    </html>
  );
}
