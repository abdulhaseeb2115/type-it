"use client";
import React from "react";
import { twMerge } from "tailwind-merge";
// layout
import Section from "@/components/layouts/Section";
// components
import Marquee from "@/components/Marquee";
import LeaderboardCard from "@/components/LeaderboardCard";
import GlassmorphismCard from "@/components/GlassmorphismCard";
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
	section:
		"flex-1 flex flex-col xl:flex-row items-center gap-4 overflow-x-hidden",
	heading: "text-primary-1 font-bold text-xl uppercase tracking-wider",
	left: "flex-1",
	divider:
		"bg-primary-3 h-0.5 xl:h-[200px] 3xl:h-[300px] w-1/2 xl:w-0.5 my-auto rounded-full",
	right: "w-full xl:h-full xl:w-64 relative overflow-hidden",
	rightContainer: "w-full p-6 flex flex-col rounded-2xl gap-5",
};

//----------------------------------------------
const Hero = ({ className }: HeroProps) => {
	return (
		<Section className={twMerge(heroStyles.section, className)}>
			<div className={heroStyles.left}></div>

			<div className={heroStyles.divider} />

			<div className={heroStyles.right}>
				<GlassmorphismCard className={heroStyles.rightContainer}>
					<h1 className={heroStyles.heading}>Leaderboard</h1>
					<Marquee>
						{TOP_10_RANKINGS?.map?.(({ avatarId, userName }, index) => (
							<LeaderboardCard
								key={`${index} ${userName}`}
								userName={userName}
								avatarId={avatarId}
								rank={index + 1}
							/>
						))}
					</Marquee>
				</GlassmorphismCard>
			</div>
		</Section>
	);
};

export default Hero;
