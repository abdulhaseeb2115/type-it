import React, { ReactNode } from "react";
import { twMerge } from "tailwind-merge";
//----------------------------------------------

type Props = {
	children: ReactNode;
	className?: string;
};

//----------------------------------------------
const Section = ({ children, className }: Props) => {
	return (
		<section className={twMerge("p-6 md:p-10 lg:p-20 xl:p-24", className)}>
			{children}
		</section>
	);
};

export default Section;
