import "@/styles/globals.css";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import Appbar from "@/components/appbar/Appbar";

export const metadata: Metadata = {
	title: {
		default: "SM Fintech Job Task",
		template: `%s - ${siteConfig.name}`,
	},
	description: siteConfig.description,
	icons: {
		icon: "/favicon.ico",
		shortcut: "/favicon-16x16.png",
		apple: "/apple-touch-icon.png",
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<>
			<Appbar>
				{children}
			</Appbar>
		</>
	);
}
