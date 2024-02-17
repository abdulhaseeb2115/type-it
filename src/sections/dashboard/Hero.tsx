"use client";
import React from "react";
import { twMerge } from "tailwind-merge";
// layout
import Section from "@/components/layouts/Section";
//----------------------------------------------

type HeroProps = {
	className?: string;
};

const heroStyles = {
	section: "",
};

//----------------------------------------------
const Hero = ({ className }: HeroProps) => {
	return (
		<Section className={twMerge(heroStyles.section, className)}>hello</Section>
	);
};

export default Hero;
