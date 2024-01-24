// config
import { PHRASES } from "@/config/heroPhrases";

//----------------------------------------------
export const getRandomPhrase = (): string => {
	const randomIndex = Math.floor(Math.random() * PHRASES.length);
	return PHRASES[randomIndex];
};
