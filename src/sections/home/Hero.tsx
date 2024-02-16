"use client";
import React, { useEffect, useState } from "react";
// hooks
import UseTextAnimation from "@/hooks/UseTextAnimation";
// components
import Section from "@/components/layouts/Section";
import Keyboard from "@/components/Keyboard";
import TypingAnimation from "@/components/TypingAnimation";
//----------------------------------------------

type HeroProps = {
	phrase: string;
};

//----------------------------------------------
const Hero = ({ phrase }: HeroProps) => {
	const animationOptions = {
		text: phrase,
		duration: 0.3,
	};
	const { key, index } = UseTextAnimation(animationOptions);
	return (
		<Section className="relative h-screen flex flex-col items-center justify-center bg-dark-2 pt-12 overflow-y-hidden">
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
