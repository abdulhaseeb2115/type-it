import React, { ReactNode } from "react";

//----------------------------------------------

type Props = {
	children: ReactNode;
	className?: string;
};

//----------------------------------------------
const Section = ({ children, className }: Props) => {
	return (
		<section className={`p-10 lg:p-20 xl:p-24 ${className}`}>
			{children}
		</section>
	);
};

export default Section;
