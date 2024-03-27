import React, { HTMLProps, ReactNode } from "react";
import { twMerge } from "tailwind-merge";
//----------------------------------------------

type Props = {
	children: ReactNode;
	className?: string;
} & HTMLProps<HTMLElement>;

const pageStyles = {
	page: "flex-1 flex",
};

//----------------------------------------------
const Page = ({ children, className, ...props }: Props) => {
	return (
		<main className={twMerge(pageStyles.page, className)} {...props}>
			{children}
		</main>
	);
};

export default Page;
