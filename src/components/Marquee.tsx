"use client";
import { ReactNode, useEffect, useRef } from "react";
import { twMerge } from "tailwind-merge";
import gsap from "gsap";
// types
import { MarqueeDirections } from "@/types";
//----------------------------------------------

interface MarqueeProps {
	direction?: MarqueeDirections;
	className?: string;
	children: ReactNode;
	pause?: boolean;
}

const marqueeStyles = {
	main: "flex gap-4",
	flex: (direction: MarqueeDirections) =>
		direction === "up" || direction === "down" ? "flex-col" : "flex-row",
};

//----------------------------------------------
export const Marquee: React.FC<MarqueeProps> = ({
	direction = "right",
	pause = false,
	className,
	children,
}) => {
	const marqueeRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const startMarquee = () => {
			const marquee = marqueeRef.current;
			if (!marquee) return;

			const content = marquee?.querySelector(".marquee-content");
			const clone = content?.cloneNode(true) as HTMLDivElement;
			marquee.appendChild(clone);
			marquee.appendChild(clone);

			const tl = gsap.timeline({
				repeat: -1,
				paused: pause,
				onComplete: () => {
					tl.restart();
				},
			});

			interface MarqueeConfig {
				ease: string;
				x?: number;
				y?: number;
				duration?: number;
			}
			const marqueeConfig: MarqueeConfig = {
				ease: "linear",
			};

			const displacement =
				direction === "up" || direction === "down" ? "y" : "x";
			const size =
				direction === "up" || direction === "down"
					? marquee.clientHeight
					: marquee.clientWidth;

			marqueeConfig[displacement] =
				direction === "up" || direction === "left" ? -size : size;
			marqueeConfig.duration = size / 50;

			tl.to(marquee, marqueeConfig);
		};

		startMarquee();
	}, [direction, pause]);

	return (
		<div className={twMerge("marquee-container", className)}>
			<div
				className={twMerge(
					"marquee",
					marqueeStyles.main,
					marqueeStyles.flex(direction)
				)}
				ref={marqueeRef}
			>
				<div
					className={twMerge(
						"marquee-content",
						marqueeStyles.main,
						marqueeStyles.flex(direction)
					)}
				>
					{children}
				</div>
			</div>
		</div>
	);
};
