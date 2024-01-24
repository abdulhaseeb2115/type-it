import React from "react";
// sections
import Hero from "@/sections/home/Hero";
// utils
import { getRandomPhrase } from "@/utils/getRandomPhrase";

//----------------------------------------------
const Home = () => {
	const phrase = getRandomPhrase();
	return (
		<div className="">
			<Hero phrase={phrase} />
		</div>
	);
};

export default Home;
