import React from "react";
// layout
import Page from "@/components/layouts/Page";
// sections
import Hero from "@/sections/home/Hero";
// utils
import { getRandomPhrase } from "@/utils/getRandomPhrase";

//----------------------------------------------
const App = () => {
	const phrase = getRandomPhrase();
	return (
		<Page className="">
			<Hero phrase={phrase} />
		</Page>
	);
};

export default App;

//----------------------------------------------

/**
 * >> LOGIN/Register(Overlay)
 * >> LANDING (typing/keyboard animation)
 * >  DASHBOARD (avatar, personal data, avg, last score)
 *    LEADERBOARD
 *    HISTORY
 *    SETTINGS
 *    TEST
 */
