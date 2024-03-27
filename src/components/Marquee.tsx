"use client";
import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";
// types
import { MarqueeDirections } from "@/types";
//----------------------------------------------

interface MarqueeProps {
	direction?: MarqueeDirections;
	className?: string;
	children: ReactNode;
	pause?: boolean;
}

//----------------------------------------------
const Marquee: React.FC<MarqueeProps> = ({
	direction = "right",
	pause = false,
	className,
	children,
}) => {
	const animationDirectionClass = {
		up: "slide-up",
		down: "slide-down",
		right: "slide-right",
		left: "slide-left",
	};

	return (
		<div className={twMerge("relative overflow-hidden", className)}>
			<div className={twMerge(!pause && animationDirectionClass[direction])}>
				{children}
			</div>
		</div>
	);
};

export default Marquee;
