"use client";

import React, { useCallback } from "react";
// components
import Key from "./elements/Key";
// config
import { ARROW_KEY, MAIN_KEYS, OTHER_KEYS } from "@/config/keyboardKeys";
// hooks
import UseKeyState from "@/hooks/UseKeyState";

//----------------------------------------------

type Props = {
	className?: string;
	text: string;
	activeKeyIndex: number;
};

const typingLogoStyles = {
	container: "text-9xl font-black m-5 uppercase",
	letter: "duration-200 ease-in-out",
};

//----------------------------------------------
const TypingLogo = ({ className, activeKeyIndex, text }: Props) => {
	const letters = text.split("");

	return (
		<div className={typingLogoStyles.container + ` ${className}`}>
			{letters?.map((letter, index) => (
				<span
					key={`${letter} ${index}`}
					className={
						typingLogoStyles.letter +
						` ${index <= activeKeyIndex ? "!text-red-500" : "text-white"}`
					}
				>
					{letter === " " ? <> &nbsp;</> : letter}
				</span>
			))}
		</div>
	);
};

export default React.memo(TypingLogo);
