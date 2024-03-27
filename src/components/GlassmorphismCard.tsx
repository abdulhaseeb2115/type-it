import React, { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

//----------------------------------------------

type Props = {
	className: string;
	children: ReactNode;
};

const cardStyles = {
	glassMorphism:
		"bg-dark-1 bg-opacity-20 backdrop-blur-lg border border-dark-1 border-opacity-40",
};

//----------------------------------------------
const GlassmorphismCard = ({ className, children }: Props) => {
	return (
		<div className={twMerge(cardStyles.glassMorphism, className)}>
			{children}
		</div>
	);
};

export default GlassmorphismCard;
