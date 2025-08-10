import FooterDetails from "./FooterDetails";

const Footer = () => {
  return (
    <div className="px-20 py-4 border-t-4 border-green-500">
      <FooterDetails />
      <div className="w-full border-t border-gray-200 dark:border-gray-700 h-32 flex items-center mt-6">
        <div className="flex justify-between items-center mt-4 w-[90%] ml-0 ">
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            © 2025 ExpenseTracker AI. All rights reserved.
          </p>
          <div className="text-green-500 text-sm flex items-center gap-2 bg-green-50 p-0.5 px-2 rounded-lg">
            <div className="bg-green-600 w-1.5 h-1.5 rounded-full" />
            Made by Girish
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
