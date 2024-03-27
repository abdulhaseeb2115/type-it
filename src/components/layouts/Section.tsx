import React, { HTMLProps, ReactNode } from "react";
import { twMerge } from "tailwind-merge";
//----------------------------------------------

type Props = {
	children: ReactNode;
	className?: string;
} & HTMLProps<HTMLElement>;

//----------------------------------------------
const Section = ({ children, className, ...props }: Props) => {
	return (
		<section
			className={twMerge("p-6 md:py-8 md:px-10 lg:px-20 xl:px-24 ", className)}
			{...props}
		>
			{children}
		</section>
	);
};

export default Section;
