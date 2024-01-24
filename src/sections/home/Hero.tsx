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
		<Section className="relative h-screen flex flex-col items-center justify-center bg-dark-2">
			<TypingAnimation
				text={animationOptions.text}
				activeKeyIndex={index}
				className="mb-10 3xl:mb-20 mt-auto"
			/>
			<Keyboard forTest={false} activeKey={key} />
			{/* <button className="mt-10 3xl:mt-20 bg-primary-2 py-3 px-16 rounded-full font-medium hover:scale-75 duration-200 ease-in-out">
				Start Test
			</button> */}
		</Section>
	);
};

export default Hero;
