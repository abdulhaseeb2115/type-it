"use client";
import React from "react";
// components
import Section from "@/components/layouts/Section";
import Keyboard from "@/components/Keyboard";
// hooks
import UseTextAnimation from "@/hooks/UseTextAnimation";
import TypingLogo from "@/components/TypingLogo";

//----------------------------------------------
const Hero = () => {
	const animationOptions = {
		text: "type it",
		duration: 2,
	};
	const { key, index } = UseTextAnimation(animationOptions);

	return (
		<Section className="min-h-[800px] h-screen flex flex-col items-center justify-center">
			<TypingLogo
				text={animationOptions.text}
				activeKeyIndex={index}
				className="mb-40"
			/>
			<Keyboard forTest={false} activeKey={key} />
		</Section>
	);
};

export default Hero;
