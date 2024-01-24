import type { Metadata } from "next";
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
			<body className={font.className}>
				<Header />
				{children}
			</body>
		</html>
	);
}
