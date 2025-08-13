"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ href, title }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`relative block px-6 py-2 sm:text-lg lg:text-xl font-extrabold rounded-full transition-all duration-300
        border-2 border-transparent
        hover:border-gradient-to-r hover:from-purple-500 hover:via-pink-500 hover:to-rose-500
        hover:bg-gradient-to-r hover:from-purple-500/20 hover:via-pink-500/20 hover:to-rose-500/20
        hover:text-white focus:outline-none focus:ring-2 focus:ring-pink-500/40
        shadow-md
        ${
          isActive
            ? "text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 shadow-lg"
            : "text-[#F3E8FF]"
        }
      `}
    >
      {title}
    </Link>
  );
};

export default NavLink;
