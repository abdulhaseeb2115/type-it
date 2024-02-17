import React, { ReactNode } from "react";
import { twMerge } from "tailwind-merge";
//----------------------------------------------

type Props = {
	children: ReactNode;
	className?: string;
};

//----------------------------------------------
const Page = ({ children, className }: Props) => {
	return <main className={twMerge("", className)}>{children}</main>;
};

export default Page;
