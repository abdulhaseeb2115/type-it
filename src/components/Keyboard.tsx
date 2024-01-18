"use client";

import React, { useState } from "react";
// components
import Key from "./elements/Key";
// config
import { ARROW_KEY, MAIN_KEYS, OTHER_KEYS } from "@/config/keyboardKeys";
// hooks
import UseKeyState from "@/hooks/UseKeyState";

//

type Props = {
	className?: string;
};

const keyboardStyles = {
	container: "",
	row: "flex",
	upDownArrow: "flex flex-col justify-between",
};

//
const Keyboard = ({ className }: Props) => {
	const pressedKey = UseKeyState();
	const isKeyActive = (content: string) =>
		content?.toLowerCase() === pressedKey;

	return (
		<div className={keyboardStyles.container + ` ${className}`}>
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
					className="-rotate-90 !text-sm"
					active={false}
				/>
				<div className={keyboardStyles.upDownArrow}>
					<Key
						keyData={ARROW_KEY}
						className="!h-[18px] xl:!h-[22px] 3xl:!h-[30px] w-10 xl:w-12 3xl:w-16 !text-sm"
						active={isKeyActive(ARROW_KEY.value)}
					/>
					<Key
						keyData={ARROW_KEY}
						className="!h-[18px] xl:!h-[22px] 3xl:!h-[30px] w-10 xl:w-12 3xl:w-16 rotate-180 !text-sm"
						active={false}
					/>
				</div>
				<Key
					keyData={ARROW_KEY}
					className="rotate-90 !text-sm"
					active={false}
				/>
			</div>
		</div>
	);
};

export default Keyboard;
