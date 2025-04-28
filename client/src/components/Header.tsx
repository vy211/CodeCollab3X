// src/components/Header.tsx
import React from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

const Header: React.FC = () => {
  return (
    <header className="w-full h-16 bg-blue-600 flex items-center justify-between px-6 shadow-md">
      {/* Left side - Website Name */}
      <div className="flex items-center gap-2">
        <img src="/assets/logo/logo.png" alt="Logo" className="w-10 h-10 object-contain" />
        <span className="text-white text-2xl font-bold">CodeCollab3x</span>
    </div>

      {/* Right side - Profile Dropdown */}
      <Menu as="div" className="relative inline-block text-left">
        <MenuButton className="inline-flex items-center text-white font-medium">
          <span className="mr-2">Profile</span>
          <ChevronDownIcon className="w-5 h-5" />
        </MenuButton>

        <MenuItems className="absolute right-0 mt-2 w-40 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg focus:outline-none">
          <div className="p-1">
            <MenuItem>
              {({ active }) => (
                <button
                  className={`${
                    active ? 'bg-gray-100' : ''
                  } group flex w-full items-center rounded-md p-2 text-sm text-gray-700`}
                >
                  Sign In
                </button>
              )}
            </MenuItem>
            <MenuItem>
              {({ active }) => (
                <button
                  className={`${
                    active ? 'bg-gray-100' : ''
                  } group flex w-full items-center rounded-md p-2 text-sm text-gray-700`}
                >
                  Log Out
                </button>
              )}
            </MenuItem>
          </div>
        </MenuItems>
      </Menu>
    </header>
  );
};

export default Header;
