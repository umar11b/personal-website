"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ href, title }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`relative block px-5 py-2 sm:text-lg font-semibold rounded-full transition-all duration-300
        border-2 border-transparent
        hover:border-gradient-to-r hover:from-purple-500 hover:via-pink-500 hover:to-rose-500
        hover:bg-gradient-to-r hover:from-purple-500/10 hover:via-pink-500/10 hover:to-rose-500/10
        hover:text-white focus:outline-none focus:ring-2 focus:ring-pink-500/40
        shadow-sm
        ${
          isActive
            ? "text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 shadow-lg"
            : "text-[#ADB7BE]"
        }
      `}
    >
      {title}
    </Link>
  );
};

export default NavLink;
