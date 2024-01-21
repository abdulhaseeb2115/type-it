import * as React from "react";
import { SVGProps } from "react";

//----------------------------------------------
const ScrollIcon = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		viewBox="0 0 24 24"
		{...props}
	>
		<path
			stroke="inherit"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={0.5}
			d="M5 15a7 7 0 0 0 14 0V9A7 7 0 0 0 5 9v6ZM12 6v8"
		/>
		<path
			stroke="inherit"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={0.5}
			d="m15 11-3 3-3-3"
		/>
	</svg>
);
export default ScrollIcon;
