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
			className={twMerge(
				"p-6 max-xl:!pt-20 md:p-10 lg:p-20 xl:p-24",
				className
			)}
			{...props}
		>
			{children}
		</section>
	);
};

export default Section;
