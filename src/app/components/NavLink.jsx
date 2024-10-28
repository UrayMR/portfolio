import Link from "next/link";

const NavLink = ({ href, title }) => {
  return (
    <Link
      href={href}
      className="block rounded py-2 pl-3 pr-4 text-[#ADB7BE] hover:text-white text-md md:p-0"
    >
      {title}
    </Link>
  );
};

export default NavLink;
