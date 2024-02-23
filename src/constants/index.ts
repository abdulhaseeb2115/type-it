// assets
import avatar_1 from "@/assets/avatars/avatar_1.png";
import avatar_2 from "@/assets/avatars/avatar_2.png";
import avatar_3 from "@/assets/avatars/avatar_3.png";
import avatar_4 from "@/assets/avatars/avatar_4.png";
// types
import { AvatarCollection, Key, RankColorCollection } from "@/types";

//----------------------------------------------
//----------------------------------------------

export const AVATARS: AvatarCollection = {
	1: avatar_1,
	2: avatar_2,
	3: avatar_3,
	4: avatar_4,
};

//----------------------------------------------

export const PHRASES: string[] = [
	"Speed Up, type it",
	"Type it faster",
	"Quickly type it",
	"Go ahead, type it",
	"Now, type it swiftly",
	"Type it quickly",
	"Accelerate and type it",
	"Hurry, type it up",
	"Type it up, speed",
	"Go for it, type it",
	"Swiftly type it now",
];

//----------------------------------------------

export const MAIN_KEYS: Key[][] = [
	[
		{ value: "~", disabled: true },
		{ value: "1" },
		{ value: "2" },
		{ value: "3" },
		{ value: "4" },
		{ value: "5" },
		{ value: "6" },
		{ value: "7" },
		{ value: "8" },
		{ value: "9" },
		{ value: "0" },
		{ value: "-" },
		{ value: "=" },
		{ value: "backspace", wide: true, disabled: true },
	],
	[
		{ value: "tab", wide: true, disabled: true },
		{ value: "q" },
		{ value: "w" },
		{ value: "e" },
		{ value: "r" },
		{ value: "t" },
		{ value: "y" },
		{ value: "u" },
		{ value: "i" },
		{ value: "o" },
		{ value: "p" },
		{ value: "[" },
		{ value: "]" },
		{ value: "\\", wide: true },
	],
	[
		{ value: "caps lock", wide: true, disabled: true },
		{ value: "a" },
		{ value: "s" },
		{ value: "d" },
		{ value: "f" },
		{ value: "g" },
		{ value: "h" },
		{ value: "j" },
		{ value: "k" },
		{ value: "l" },
		{ value: ";" },
		{ value: "'" },
		{ value: "enter", wide: true, disabled: true },
	],
	[
		{ value: "shift", wide: true, disabled: true },
		{ value: "z" },
		{ value: "x" },
		{ value: "c" },
		{ value: "v" },
		{ value: "b" },
		{ value: "n" },
		{ value: "m" },
		{ value: "," },
		{ value: "." },
		{ value: "/" },
		{ value: "shift", wide: true, disabled: true },
	],
];

export const OTHER_KEYS: Key[] = [
	{ value: "ctrl", disabled: true },
	{ value: "fn", disabled: true },
	{ value: "⊞", disabled: true },
	{ value: "alt", disabled: true },
	{ value: "space", wide: true },
	{ value: "alt", disabled: true },
	{ value: "ctrl", disabled: true },
];

export const ARROW_KEY: Key = { value: "▲", disabled: true };

//----------------------------------------------

export const TROPHY_COLORS_BY_RANK: RankColorCollection = {
	1: "#facc15",
	2: "#e2e8f0",
	3: "#d97706",
};

//----------------------------------------------
