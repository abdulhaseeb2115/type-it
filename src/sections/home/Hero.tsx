"use client";
import React from "react";
import { twMerge } from "tailwind-merge";
// hooks
import UseTextAnimation from "@/hooks/UseTextAnimation";
// layout
import Section from "@/components/layouts/Section";
// components
import Keyboard from "@/components/Keyboard";
import TypingAnimation from "@/components/TypingAnimation";
//----------------------------------------------

type HeroProps = {
	phrase: string;
	className?: string;
};

const heroStyles = {
	section:
		"relative h-screen flex flex-col items-center justify-center overflow-hidden",
};

//----------------------------------------------
const Hero = ({ phrase, className }: HeroProps) => {
	const animationOptions = {
		text: phrase,
		duration: 0.3,
	};
	const { key, index } = UseTextAnimation(animationOptions);
	return (
		<Section className={twMerge(heroStyles.section, className)}>
			<TypingAnimation
				text={animationOptions.text}
				activeKeyIndex={index}
				className="mb-10 max-md:rotate-90"
			/>
			<Keyboard forTest={false} activeKey={key} className="max-md:hidden" />
		</Section>
	);
};

export default Hero;
