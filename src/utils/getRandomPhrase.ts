// constants
import { PHRASES } from "@/constants";

//----------------------------------------------
export const getRandomPhrase = (): string => {
	const randomIndex = Math.floor(Math.random() * PHRASES.length);
	return PHRASES[randomIndex];
};
