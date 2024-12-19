import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-full px-4 text-center dark:bg-gray-50 dark:text-gray-800">
        <h1 className="text-6xl font-bold gradient-title mb-4">404</h1>
        <h2 className="text-2xl font-semibold  mb-4">Page Not Found</h2>
      <Link
        href="/"
        className="px-8 py-3 font-semibold rounded dark:bg-violet-600 dark:text-gray-50"
      >
        Back to homepage
      </Link>
    </div>
  );
};

export default Page;
