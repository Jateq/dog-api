import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-gray-800 py-4">
      <div className="container mx-auto flex justify-between items-center">
      <Link href="/">
        <h1 className="text-white text-2xl font-bold hover:text-gray-200 duration-300">Dogs</h1>
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a
                href="/random-dog"
                className="text-gray-300 hover:text-white transition duration-300"
              >
                Random dog
              </a>
            </li>
            <li>
              <a
                href="/search"
                className="text-gray-300 hover:text-white transition duration-300"
              >
                Search
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
