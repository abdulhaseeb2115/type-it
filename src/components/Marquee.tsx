"use client";
import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";
//----------------------------------------------

interface MarqueeProps {
	className?: string;
	children: ReactNode;
	pause?: boolean;
}

//----------------------------------------------
const Marquee: React.FC<MarqueeProps> = ({
	pause = false,
	className,
	children,
}) => {
	return (
		<div
			className={twMerge(
				"overflow-hidden max-xl:w-full xl:max-h-[490px] 3xl:max-h-[700px]",
				className
			)}
		>
			<div
				className={twMerge(
					"max-xl:hidden flex flex-col gap-3",
					!pause && "slide-up"
				)}
			>
				{children}
			</div>
			<div
				className={twMerge(
					"xl:hidden min-w-full w-fit flex gap-10 pr-28",
					!pause && "slide-left"
				)}
			>
				{children}
			</div>
		</div>
	);
};

export default Marquee;
