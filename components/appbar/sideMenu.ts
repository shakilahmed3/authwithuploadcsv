export interface MenuItem {
    name: string;
    url: string;
    path: string;
    icon: string;
    dropdown?: MenuItem[];
}

interface Menu {
    [key: string]: MenuItem[];
}

export const sideMenu: Menu = {
    hr: [
        {
            name: "Dashboard",
            url: "/hr/dashboard",
            path: "/hr/dashboard*",
            icon: "BiSolidDashboard",
        },
        {
            name: "Terms & Condition",
            url: "/hr/employee/terms-condition",
            path: "/hr/employee/terms-condition*",
            icon: "MdDocumentScanner",
        },
        {
            name: "Employee Management",
            url: "/hr/employee",
            path: "/hr/employee*",
            icon: "FaUserTie",
            dropdown: [
                {
                    name: "All Employee",
                    url: "/hr/employee/all",
                    path: "/hr/employee/all*",
                    icon: "FaUserEdit",
                },
                {
                    name: "Attendences",
                    url: "/hr/employee/attendences",
                    path: "/hr/employee/attendences*",
                    icon: "PiChatTeardropTextLight",
                },
                {
                    name: "Salary Report",
                    url: "/hr/employee/salary-report",
                    path: "/hr/employee/salary-report*",
                    icon: "HiDocumentReport",
                },
                {
                    name: "Leave Management",
                    url: "/hr/employee/leave",
                    path: "/hr/employee/leave*",
                    icon: "TiTabsOutline",
                },
            ],
        },
    ],
    customer: [
        {
            name: "Dashboard",
            url: "/customer/dashboard",
            path: "/customer/dashboard*",
            icon: "BiSolidDashboard",
        },
        {
            name: "Attendences",
            url: "/customer/attendences",
            path: "/customer/attendences*",
            icon: "PiChatTeardropTextLight",
            dropdown: [
                {
                    name: "My Attendences",
                    url: "/customer/attendences",
                    path: "/customer/attendences*",
                    icon: "PiChatTeardropTextLight",
                },
                {
                    name: "Salary Report",
                    url: "/customer/attendences/report",
                    path: "/customer/attendences/report*",
                    icon: "HiDocumentReport",
                },
                {
                    name: "Leave & Absent",
                    url: "/customer/attendences/leave-absent",
                    path: "/customer/attendences/leave-absent*",
                    icon: "TiTabsOutline",
                },
            ],
        },
        {
            name: "Entertainment",
            url: "/customer/entertainment",
            path: "/customer/entertainment*",
            icon: "FaCentercode",
        },
    ],
    admin: [
        {
            name: "Dashboard",
            url: "/admin",
            path: "/admin*",
            icon: "BiSolidDashboard",
        },
        {
            name: "Metrics",
            url: "/admin/metrics",
            path: "/admin/metrics*",
            icon: "FaAsymmetrik",
        },
        {
            name: "Teams",
            url: "/admin/team",
            path: "/admin/team*",
            icon: "RiTeamFill",
        },
        {
            name: "Portal Management",
            url: "/admin/staff",
            path: "/admin/staff*",
            icon: "RiTeamFill",
            dropdown: [
                {
                    name: "Staff List",
                    url: "/admin/staff",
                    path: "/admin/staff*",
                    icon: "RiTeamFill",
                },
                {
                    name: "Role Management",
                    url: "/admin/staff/role",
                    path: "/admin/staff/role",
                    icon: "SiChevrolet",
                }
            ],
        },
        {
            name: "Settings",
            url: "/admin/settings",
            path: "/admin/settings*",
            icon: "IoIosSettings",
        },
        {
            name: "Finance Management",
            url: "/admin/finance",
            path: "/admin/finance*",
            icon: "FiNavigation",
        },
    ],
};