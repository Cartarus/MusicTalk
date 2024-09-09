import React, { useEffect, useRef, useState } from 'react';

interface Props {
  icon: React.ReactNode;
}

export const DropDownButton = ({ icon }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative " ref={dropdownRef}>

      <button onClick={toggleDropdown} className='hover:bg-neutral-900 p-2 rounded-md focus:bg-neutral-900'>
        {icon}
      </button>
      {isOpen && (
        // <div className="absolute left-0 top-full mt-2 w-48 bg-neutral-900 rounded-md shadow-lg">
        <div className="absolute -left-40  w-48 bg-neutral-900 rounded-md">
          <ul>
            <li>
              <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                Edit
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                Remove
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                Report
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};
