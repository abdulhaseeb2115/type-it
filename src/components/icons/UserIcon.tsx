import * as React from "react";
import { SVGProps } from "react";

//----------------------------------------------
const UserIcon = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		viewBox="0 0 24 24"
		{...props}
	>
		<circle cx={12} cy={6} r={4} stroke="inherit" strokeWidth={1.5} />
		<path
			stroke="inherit"
			strokeLinecap="round"
			strokeWidth={1.5}
			d="M15 20.615c-.91.247-1.926.385-3 .385-3.866 0-7-1.79-7-4s3.134-4 7-4 7 1.79 7 4c0 .345-.077.68-.22 1"
		/>
	</svg>
);
export default UserIcon;
