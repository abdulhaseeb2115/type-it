// types
import { Key } from "@/types";

//
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
		{ value: "enter", wide: true },
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
//
export const OTHER_KEYS: Key[] = [
	{ value: "ctrl", disabled: true },
	{ value: "fn", disabled: true },
	{ value: "⊞", disabled: true },
	{ value: "alt", disabled: true },
	{ value: "space", wide: true },
	{ value: "alt", disabled: true },
	{ value: "ctrl", disabled: true },
];
//
export const ARROW_KEY: Key = { value: "▲", disabled: true };
//
