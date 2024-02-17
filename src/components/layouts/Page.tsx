import React, { HTMLProps, ReactNode } from "react";
import { twMerge } from "tailwind-merge";
//----------------------------------------------

type Props = {
	children: ReactNode;
	className?: string;
} & HTMLProps<HTMLElement>;

//----------------------------------------------
const Page = ({ children, className, ...props }: Props) => {
	return (
		<main className={twMerge("", className)} {...props}>
			{children}
		</main>
	);
};

export default Page;
