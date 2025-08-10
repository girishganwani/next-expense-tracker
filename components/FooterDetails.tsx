import { NavItemList } from "./NavItems";

const FooterDetails = () => {
  return (
    <div className="flex justify-between text-gray-700 dark:text-gray-300 py-2 w-[80%] ml-0">
      {/* left Details */}
      <div className="flex flex-col gap-2 justify-start items-start">
        <div className="flex gap-2 items-center justify-center">
          <div className="flex items-center justify-center w-7 h-7 bg-green-500 dark:bg-green-600 border-none rounded-lg">
            💰
          </div>
          <h1 className="text-lg font-bold text-green-500 dark:text-green-400">
            Expense Tracker AI
          </h1>
        </div>
        <p className="text-gray-600 dark:text-white leading-relaxed max-w-sm">
          Intelligent financial management powered by AI. Track your expenses,
          manage your budget, and gain insights into your spending patterns.
        </p>
      </div>
      {/* center Details */}
      <div className="flex flex-col gap-2 justify-center">
        <h3 className="font-bold text-gray-900 dark:text-gray-100 text-xl my-1 p-0.5">
          Quick Links
        </h3>
        <div className="flex flex-col gap-1 p-0.5">
          {NavItemList.map((item, index) => (
            <div
              key={index}
              className="hover:text-green-600 dark:hover:text-green-400 hover:rounded-xl p-0.5 w-20 text-left text-gray-600 dark:text-gray-300"
            >
              {item.title}
            </div>
          ))}
        </div>
      </div>
      {/* right Details */}
      <div>
        <div className="font-bold text-gray-900 dark:text-gray-100 text-xl my-1 p-0.5">
          Features
        </div>
        <div className="space-y-3 mt-4">
          <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400 text-sm">
            <div className="w-5 h-5 bg-gradient-to-br from-emerald-500 to-green-500 rounded-md flex items-center justify-center shadow-sm">
              <span className="text-white text-xs">🤖</span>
            </div>
            AI-Powered Insights
          </div>
          <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400 text-sm">
            <div className="w-5 h-5 bg-gradient-to-br from-green-500 to-teal-500 rounded-md flex items-center justify-center shadow-sm">
              <span className="text-white text-xs">✨</span>
            </div>
            Smart Categorization
          </div>
          <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400 text-sm">
            <div className="w-5 h-5 bg-gradient-to-br from-teal-500 to-emerald-500 rounded-md flex items-center justify-center shadow-sm">
              <span className="text-white text-xs">📊</span>
            </div>
            Analytics Dashboard
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterDetails;
