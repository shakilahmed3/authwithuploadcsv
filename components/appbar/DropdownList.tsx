import React, { useState } from 'react';
import { MenuItem } from './sideMenu';
import GetIcons from '../getIcons';
import Link from 'next/link';

const DropdownList = ({ sublink }: { sublink: MenuItem }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <>
            <button
                onClick={toggleDropdown}
                type="button" className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
                <GetIcons item={sublink} />
                <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">{sublink.name}</span>
                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                </svg>
            </button>
            <ul
                id="dropdown-example"
                className={`${isDropdownOpen ? 'block' : 'hidden'
                    } py-2 space-y-2`}
            >
                {
                    sublink.dropdown &&
                    sublink.dropdown.map((item, index) => <li key={index}>
                        <Link href={item.url} className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                            <GetIcons item={item} />
                            <span className="ms-3">{item.name}</span>
                        </Link>
                    </li>)
                }

            </ul>
        </>
    );
};

export default DropdownList;
