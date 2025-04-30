"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ href, title }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white ${
        isActive
          ? "text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500"
          : ""
      }`}
    >
      {title}
    </Link>
  );
};

export default NavLink;
