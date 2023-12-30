'use client'
import React, { useEffect, useState } from 'react'
import { Logo } from '../icons';
import Link from 'next/link';
import ProfileNav from '../Profile/ProfileNav';
import {
    Navbar as NextUINavbar,
    NavbarItem,
} from "@nextui-org/navbar";
import { ThemeSwitch } from "@/components/theme-switch";
import DropdownList from './DropdownList';
import { sideMenu } from './sideMenu';
import GetIcons from '../getIcons';
import { useAppDispatch, useAppSelector } from '@/redux/store/hooks';
import { setUser } from '@/redux/features/user-slice';

const Appbar = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const user = useAppSelector(state => state.user)
    const dispatch = useAppDispatch()

    const menus = sideMenu[user.user?.role || 'customer'];

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    useEffect(() => {
        const user = localStorage.getItem('user')
        if (user) {
            dispatch(setUser(JSON.parse(user)))
        }
    }, [dispatch])

    return (
        <>
            <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                <div className="px-3 py-3 lg:px-5 lg:pl-3">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center justify-start rtl:justify-end">
                            <button
                                onClick={toggleSidebar}
                                type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                                <span className="sr-only">Open sidebar</span>
                                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                                </svg>
                            </button>
                            <Link href="/" className="flex ms-2 md:me-24">
                                <Logo size={40} />
                                <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">Job Task</span>
                            </Link>
                        </div>
                        <div className="flex items-center">
                            <div className="flex items-center ms-3">
                                <ProfileNav />
                                <NextUINavbar className='h-0 w-0 pl-2 pr-12'>
                                    <NavbarItem className="md:flex gap-2">
                                        <ThemeSwitch />
                                    </NavbarItem>
                                </NextUINavbar>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <aside
                id="logo-sidebar"
                className={`fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform ${isSidebarOpen ? "-translate-x-full" : "translate-x-0"
                    } bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700`}
                aria-label="Sidebar"
            >
                <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
                    <ul className="space-y-2 font-medium">
                        {menus.map((item, index) => (
                            <li key={index}>
                                {!item.dropdown &&
                                    <Link href={item.url} className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                        <GetIcons item={item} />
                                        <span className="ms-3">{item.name}</span>
                                    </Link>
                                }
                                {item.dropdown && <DropdownList sublink={item} />}
                            </li>
                        ))}
                    </ul>
                </div>
            </aside>

            <div className="p-4 sm:ml-64">
                <div className="p-4">
                    {children}
                </div>
            </div>
        </>
    )
}

export default Appbar