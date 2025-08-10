import AuthButton from "./AuthButton";
import NavbarHeader from "./NavbarHeader";
import NavbarItems from "./NavItems";
import ThemeToggleButton from "./ThemeToggleButton";

export default function Navbar() {
  return (
    <div className="flex justify-between items-center col flex-row p-4 px-20 h-16 dark:bg-gray-900 dark:text-white">
      <NavbarHeader />
      <NavbarItems />
      <div className="flex gap-4 items-center justify-center">
        <ThemeToggleButton />
        <AuthButton />
      </div>
    </div>
  );
}
