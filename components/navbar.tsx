'use client'
import {
	Navbar as NextUINavbar,
	NavbarContent,
	NavbarMenuToggle,
	NavbarBrand,
	NavbarItem,
} from "@nextui-org/navbar";

import NextLink from "next/link";

import { ThemeSwitch } from "@/components/theme-switch";

import { Logo } from "@/components/icons";
import ProfileNav from "./Profile/ProfileNav";

import { BiSolidDashboard } from "react-icons/bi";
import { MdDocumentScanner } from "react-icons/md";
import { FaUserTie } from "react-icons/fa";
import { FaUserEdit } from "react-icons/fa";
import { PiChatTeardropTextLight } from "react-icons/pi";
import { HiDocumentReport } from "react-icons/hi";
import { TiTabsOutline } from "react-icons/ti";
import { FaCentercode } from "react-icons/fa";
import { FaAsymmetrik } from "react-icons/fa";
import { RiTeamFill } from "react-icons/ri";
import { SiChevrolet } from "react-icons/si";
import { IoIosSettings } from "react-icons/io";
import { FiNavigation } from "react-icons/fi";
import { sideMenu } from "./appbar/sideMenu";

export const Navbar = () => {
	const menus = sideMenu['customer'];



	return (
		<>
			<NextUINavbar className="shadow-md" maxWidth="2xl" position="sticky">
				<NavbarContent className="basis-1/5 sm:basis-full" justify="start">
					<NavbarBrand as="li" className="gap-3 max-w-fit">
						<NextLink className="flex justify-start items-center gap-1" href="/">
							<Logo size={40} />
							<p className="font-bold "><span className="text-lgreen-100 dark:text-white">Job</span><span className="text-lblack-100 dark:text-lgreen-100">Task</span></p>
						</NextLink>
					</NavbarBrand>
				</NavbarContent>

				<NavbarContent
					className="md:flex basis-1/5 sm:basis-full"
					justify="end"
				>
					<ProfileNav />
					<NavbarItem className="md:flex gap-2">
						<ThemeSwitch />
					</NavbarItem>
					<NavbarMenuToggle />
				</NavbarContent>
			</NextUINavbar>

			<div>
				<ul>
					{menus.map((item, index) => (
						<li key={index}>
							{item.name}
							{item.dropdown && (
								<ul>
									{item.dropdown.map((subItem, subIndex) => (
										<li key={subIndex}>{subItem.name}</li>
									))}
								</ul>
							)}
						</li>
					))}
				</ul>
			</div>
		</>
	);
};
