const NavbarHeader = () => {
  return (
    <div className="flex gap-2 items-center transition-transform duration-300 justify-center ease-in-out hover:scale-110">
      <div className="flex items-center justify-center w-8 h-8 bg-green-500 dark:bg-green-600 border-none rounded-xl">
        💰
      </div>
      <h1 className="text-lg font-bold text-green-500 dark:text-green-400">Expense Tracker AI</h1>
    </div>
  );
};

export default NavbarHeader;
