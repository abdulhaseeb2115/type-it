import React from "react";
import { twMerge } from "tailwind-merge";
// components
import Avatar from "./Avatar";
// icons
import TrophyIcon from "./icons/TrophyIcon";
// utils
import { truncateText } from "@/utils/truncateText";
import { addSuffix } from "@/utils/addSuffix";
// constants
import { TROPHY_COLORS_BY_RANK } from "@/constants";

//----------------------------------------------

type Props = {
	className?: string;
	userName: string;
	rank: number;
	avatarId: number;
};

const cardStyles = {
	container: "flex items-center gap-3 mb-2",
};

//----------------------------------------------
const LeaderboardCard = ({ className, avatarId, rank, userName }: Props) => {
	return (
		<div className={twMerge(cardStyles.container, className)}>
			<Avatar avatarId={avatarId} />
			<div className="">
				<h1 className="text-sm">{truncateText(userName, 10)}</h1>
				<p className="text-xs">{addSuffix(rank)}</p>
			</div>
			<TrophyIcon
				className={twMerge("ml-auto h-5", (rank > 3 || rank < 1) && "hidden")}
				style={{ fill: TROPHY_COLORS_BY_RANK[rank] }}
			/>
		</div>
	);
};

export default React.memo(LeaderboardCard);
