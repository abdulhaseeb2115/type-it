"use client";

import React, { useCallback } from "react";
import { twMerge } from "tailwind-merge";
// components
import Key from "./elements/Key";
// config
import { ARROW_KEY, MAIN_KEYS, OTHER_KEYS } from "@/config/keyboardKeys";
// hooks
import UseKeyState from "@/hooks/UseKeyState";

//----------------------------------------------

type Props = {
	className?: string;
	forTest?: boolean;
	activeKey?: string | null;
};

const keyboardStyles = {
	container: "p-2 3xl:p-4s rounded-2xl",
	row: "flex",
	upDownContainer: "flex flex-col justify-between",
	arrowKey: "!text-sm",
	smallArrowKey:
		"!h-[18px] xl:!h-[22px] 3xl:!h-[30px] w-10 xl:w-12 3xl:w-16 !text-sm",
};

//----------------------------------------------
const Keyboard = ({ className, activeKey, forTest = false }: Props) => {
	const currentKey = forTest ? UseKeyState() : activeKey;
	const isKeyActive = useCallback(
		(content: string) => {
			return content?.toLowerCase() === currentKey?.toLowerCase();
		},
		[currentKey]
	);

	return (
		<div className={twMerge(keyboardStyles.container, className)}>
			{MAIN_KEYS?.map?.((row, i) => (
				<div key={`row${i}`} className={keyboardStyles.row}>
					{row?.map?.((keyData, j) => (
						<Key
							key={`${keyData.value}${j}`}
							keyData={keyData}
							active={isKeyActive(keyData.value)}
						/>
					))}
				</div>
			))}
			<div className={keyboardStyles.row}>
				{OTHER_KEYS?.map?.((keyData, i) => (
					<Key
						key={`${i}${keyData.value}`}
						keyData={keyData}
						active={isKeyActive(keyData.value)}
					/>
				))}
				<Key
					keyData={ARROW_KEY}
					className={keyboardStyles.arrowKey + " -rotate-90"}
					active={false}
				/>
				<div className={keyboardStyles.upDownContainer}>
					<Key
						keyData={ARROW_KEY}
						className={keyboardStyles.smallArrowKey + " !mb-0"}
						active={isKeyActive(ARROW_KEY.value)}
					/>
					<Key
						keyData={ARROW_KEY}
						className={keyboardStyles.smallArrowKey + " rotate-180 !mt-0"}
						active={false}
					/>
				</div>
				<Key
					keyData={ARROW_KEY}
					className={keyboardStyles.arrowKey + " rotate-90"}
					active={false}
				/>
			</div>
		</div>
	);
};

export default React.memo(Keyboard);
