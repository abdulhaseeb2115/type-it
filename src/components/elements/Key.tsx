import React from "react";
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
	key: "bg-gray-300 h-10 xl:h-12 3xl:h-16 text-black rounded flex items-center justify-center m-0.5",
	active: "!bg-red-200",
	disabled: "!bg-gray-400",
	main: "aspect-square text-sm xl:text-base",
	other:
		"min-w-10 xl:min-w-12 3xl:min-w-16 px-2 xl:px-4 text-xs xl:text-sm min-w-10 ",
	wide: "flex-1",
};

//----------------------------------------------
const Key = ({ className, keyData, active }: Props) => {
	const keyStyle = `${keyStyles.key} ${
		keyData.value.length > 1 ? keyStyles.other : keyStyles.main
	}`;

	return (
		<span
			className={`${keyStyle} 
			${active && !keyData.disabled && keyStyles.active} 
			${!!keyData.disabled && keyStyles.disabled} 
			${!!keyData.wide && keyStyles.wide} 
			${className}`}
		>
			{capitalize(keyData.value)}
		</span>
	);
};

export default React.memo(Key);
