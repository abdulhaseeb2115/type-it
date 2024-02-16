import React from "react";
//----------------------------------------------

type Props = {
	className?: string;
};

const logoStyles = {
	logo: "text-white font-black italic tracking-wider text-2xl md:text-3xl cursor-pointer",
};

//----------------------------------------------
const Logo = ({ className }: Props) => {
	return <div className={logoStyles.logo + ` ${className}`}>TYPE_IT</div>;
};

export default Logo;
