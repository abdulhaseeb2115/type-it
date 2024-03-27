import type { Metadata } from "next";
import { twMerge } from "tailwind-merge";
import { Poppins } from "next/font/google";
import "./globals.css";
// components
import Header from "@/sections/Header";

const font = Poppins({
	subsets: ["latin"],
	weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
	title: "TYPE-IT App",
	description: "Typing test website",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body
				className={twMerge(
					font.className,
					"flex flex-col min-h-screen bg-dark-2 text-white overflow-x-hidden"
				)}
			>
				<Header />
				{children}
			</body>
		</html>
	);
}
