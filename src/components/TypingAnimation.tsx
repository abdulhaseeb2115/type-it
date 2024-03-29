import React from "react";
import { twMerge } from "tailwind-merge";

//----------------------------------------------

type Props = {
	className?: string;
	text: string;
	activeKeyIndex: number;
};

const typingLogoStyles = {
	container: "font-black m-5 uppercase h-36 flex items-center",
	letter:
		"text-3xl sm:text-4xl lg:text-6xl 3xl:text-7xl text-primary-2 duration-300 ease-in-out opacity-30",
	activeLetter:
		"!text-5xl sm:!text-6xl lg:!text-8xl 3xl:!text-9xl !opacity-100",
};

//----------------------------------------------
const TypingAnimation = ({ className, activeKeyIndex, text }: Props) => {
	const letters = text.split("");

	return (
		<div className={twMerge(typingLogoStyles.container, className)}>
			{letters?.map((letter, index) => (
				<span
					key={`${letter} ${index}`}
					className={twMerge(
						typingLogoStyles.letter,
						index <= activeKeyIndex && typingLogoStyles.activeLetter
					)}
				>
					{letter === " " ? <> &nbsp;</> : letter}
				</span>
			))}
		</div>
	);
};

export default React.memo(TypingAnimation);
