import * as React from "react";
import { SVGProps } from "react";

//----------------------------------------------
const ChevronRightIcon = (props: SVGProps<SVGSVGElement>) => (
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
			strokeWidth={2}
			d="M8 17v-2a4 4 0 0 1 4-4h5"
		/>
		<path
			stroke="inherit"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={2}
			d="m14 8 3 3-3 3"
		/>
	</svg>
);
export default ChevronRightIcon;
