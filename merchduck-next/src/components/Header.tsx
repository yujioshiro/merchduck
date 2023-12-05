// components/Header.tsx

import React from 'react';
import Link from 'next/link'

const Header: React.FC = () => {
  return (
    <>
      <nav className="bg-white sticky top-0 z-10 px-2 sm:px-3 lg:px-4">
        <div className="flex items-center justify-center h-16">
          <div className="flex-1 flex justify-between sm:items-stretch">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/">
                <span className="font-bold text-3xl cursor-pointer">merchduck</span>
              </Link>
            </div>
            <div className="sm:block sm:ml-6">
              <div className="flex space-x-4">
                {/* <Link href="/pricing">
                  <p className="text-gray-800 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium cursor-pointer">pricing</p>
                </Link> */}
                {/* <Link href="/blog">
                  <p className="text-gray-800 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium cursor-pointer">blog</p>
                </Link> */}
                <Link href="/contact">
                  <p className="text-gray-800 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium cursor-pointer">contact</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>

  );
};

export default Header;
