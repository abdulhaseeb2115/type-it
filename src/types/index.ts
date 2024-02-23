//----------------------------------------------

import { StaticImageData } from "next/image";

export type Key = {
	value: string;
	disabled?: boolean;
	wide?: boolean;
};

export type AvatarCollection = {
	[key: number]: StaticImageData;
};

export type RankColorCollection = {
	[key: number]: string;
};

export type MarqueeDirections = "up" | "right" | "left" | "down";

//----------------------------------------------

export enum ModalState {
	Login,
	Register,
	Closed,
}

//----------------------------------------------
