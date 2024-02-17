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
			className={twMerge("p-6 pt-16 md:p-10 lg:p-20 xl:p-24", className)}
			{...props}
		>
			{children}
		</section>
	);
};

export default Section;
