import React from "react";
// sections
import Hero from "@/sections/home/Hero";
// utils
import { getRandomPhrase } from "@/utils/getRandomPhrase";

//----------------------------------------------
const App = () => {
	const phrase = getRandomPhrase();
	return (
		<main className="">
			<Hero phrase={phrase} />
		</main>
	);
};

export default App;

//----------------------------------------------

/**
 * >> LOGIN/Register(Overlay)
 * >> LANDING (typing/keyboard animation)
 * >  TEST
 *    DASHBOARD (avatar, personal data, avg, last score)
 *    LEADERBOARD
 *    HISTORY
 *    SETTINGS
 */
