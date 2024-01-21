"use client";
import React from "react";
// hooks
import UseTextAnimation from "@/hooks/UseTextAnimation";
// components
import Section from "@/components/layouts/Section";
import Keyboard from "@/components/Keyboard";
import TypingLogo from "@/components/TypingAnimation";
import ScrollIcon from "@/components/icons/ScrollIcon";

//----------------------------------------------
const Hero = () => {
	const animationOptions = {
		text: "speed up, type it",
		duration: 1,
	};
	const { key, index } = UseTextAnimation(animationOptions);

	return (
		<Section className="relative min-h-[800px] h-screen flex flex-col items-center justify-center bg-dark-2">
			<TypingLogo
				text={animationOptions.text}
				activeKeyIndex={index}
				className="mb-10 3xl:mb-20 mt-auto"
			/>
			<Keyboard forTest={false} activeKey={key} />
			<ScrollIcon className="h-14 3xl:h-20 w-auto stroke-white mt-10 3xl:mt-auto cursor-pointer hover:scale-75 duration-200 ease-in-out" />
		</Section>
	);
};

export default Hero;
