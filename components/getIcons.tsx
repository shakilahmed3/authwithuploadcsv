import React from 'react'
import { MenuItem } from './appbar/sideMenu';
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
import { Icons } from '@/types/Icons';


type ReusableLinkProps = {
    item: MenuItem;
};

const icons: Icons = {
    BiSolidDashboard,
    MdDocumentScanner,
    FaUserTie,
    FaUserEdit,
    PiChatTeardropTextLight,
    HiDocumentReport,
    TiTabsOutline,
    FaCentercode,
    FaAsymmetrik,
    RiTeamFill,
    SiChevrolet,
    IoIosSettings,
    FiNavigation,
};

const GetIcons: React.FC<ReusableLinkProps> = ({ item }) => {
    const Icon = icons[item.icon as keyof Icons];
    return Icon ? <Icon /> : null;
};

export default GetIcons