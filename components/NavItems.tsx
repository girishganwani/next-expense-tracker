import Link from "next/link";

export const NavItemList = [
  {
    title: "Home",
    navUrl: "/",
  },
  {
    title: "About",
    navUrl: "/about",
  },
  {
    title: "Contact",
    navUrl: "/contact",
  },
];

const NavbarItems = () => {
  return (
    <div className="flex justify-center items-center gap-10">
      {NavItemList.map((item, index) => (
        <Link
          key={index}
          href={item.navUrl}
          className="hover:bg-green-100 dark:hover:bg-green-800 hover:text-green-600 dark:hover:text-green-300 hover:rounded-xl p-1.5 dark:text-gray-300"
        >
          {item.title}
        </Link>
      ))}
    </div>
  );
};

export default NavbarItems;
