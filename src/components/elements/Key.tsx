import React from "react";
import { twMerge } from "tailwind-merge";
// utils
import capitalize from "@/utils/capitalize";
// types
import { Key } from "@/types";

//----------------------------------------------

type Props = {
	className?: string;
	active: boolean;
	keyData: Key;
};

const keyStyles = {
	key: "h-10 xl:h-12 3xl:h-16 rounded-md flex items-center justify-center m-0.5 xl:m-1 3xl:m-1.5 border-2 border-primary-1 text-white text-xs lg:text-sm 3xl:text-base opacity-80 select-none cursor-default duration-100 ease-in-out",
	active: "scale-[85%] !opacity-100 bg-primary-1 bg-opacity-50",
	disabled: "",
	main: "aspect-square",
	other: "min-w-10 xl:min-w-12 3xl:min-w-16 px-2 xl:px-4",
	wide: "flex-1",
};

//----------------------------------------------
const Key = ({ className, keyData, active }: Props) => {
	const keyStyle = `${keyStyles.key} ${
		keyData.value.length > 1 ? keyStyles.other : keyStyles.main
	}`;

	return (
		<span
			className={twMerge(
				keyStyle,
				active && keyStyles.active,
				!!keyData.disabled && keyStyles.disabled,
				!!keyData.wide && keyStyles.wide,
				className
			)}
		>
			{capitalize(keyData.value)}
		</span>
	);
};

export default React.memo(Key);
