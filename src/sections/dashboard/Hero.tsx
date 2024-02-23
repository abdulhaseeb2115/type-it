"use client";
import React from "react";
import { twMerge } from "tailwind-merge";
// layout
import Section from "@/components/layouts/Section";
// components
import { Marquee } from "@/components/Marquee";
import LeaderboardCard from "@/components/LeaderboardCard";
//----------------------------------------------

const TOP_10_RANKINGS = [
	{ avatarId: 1, userName: "Phoenix Ryder" },
	{ avatarId: 3, userName: "Jackie" },
	{ avatarId: 2, userName: "Carl" },
	{ avatarId: 1, userName: "Phoenix" },
	{ avatarId: 3, userName: "Jackie" },
	{ avatarId: 2, userName: "Carl" },
	{ avatarId: 1, userName: "Phoenix" },
	{ avatarId: 3, userName: "Jackie" },
	{ avatarId: 2, userName: "Carl" },
];

type HeroProps = {
	className?: string;
};

const heroStyles = {
	section: "min-h-screen flex gap-4 overflow-x-hidden",
	glassMorphism:
		"bg-dark-1 bg-opacity-5 backdrop-blur-lg border border-dark-1 border-opacity-20",
	heading: "text-primary-1 font-bold text-xl uppercase tracking-wider",
	left: "bg-slate-5 flex-1",
	divider: "bg-primary-3 h-[200px] 3xl:h-[300px] w-0.5 my-auto rounded-full",
	right: "w-64 relative flex items-center justify-center overflow-hidden",
	marquee: "max-h-[400px] 3xl:max-h-[600px] overflow-hidden mt-5 3xl:mt-10",
};

//----------------------------------------------
const Hero = ({ className }: HeroProps) => {
	return (
		<Section className={twMerge(heroStyles.section, className)}>
			<div className={heroStyles.left}></div>

			<div className={heroStyles.divider} />

			<div className={heroStyles.right}>
				<div
					className={twMerge(
						"w-full p-6 rounded-2xl",
						heroStyles.glassMorphism
					)}
				>
					<h1 className={heroStyles.heading}>Leaderboard</h1>
					<Marquee direction="up" className={heroStyles.marquee}>
						{TOP_10_RANKINGS?.map?.(({ avatarId, userName }, index) => (
							<LeaderboardCard
								key={`${index} ${userName}`}
								userName={userName}
								avatarId={avatarId}
								rank={index + 1}
							/>
						))}
					</Marquee>
				</div>
			</div>
		</Section>
	);
};

export default Hero;
