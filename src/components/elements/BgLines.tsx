import * as React from "react";
import { SVGProps } from "react";

const BgLines = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		version="1.1"
		xmlnsXlink="http://www.w3.org/1999/xlink"
		height="560"
		preserveAspectRatio="none"
		viewBox="0 0 1440 560"
		{...props}
	>
		<g mask='url("#SvgjsMask1168")' fill="none">
			<path
				d="M -1256.5137832298965,206 C -1112.51,262.2 -824.51,524.2 -536.5137832298966,487 C -248.51,449.8 -104.51,25 183.4862167701034,20 C 471.49,15 652.18,442.8 903.4862167701034,462 C 1154.79,481.2 1332.7,185.2 1440,116"
				stroke="rgba(51, 121, 194, 0.58)"
				strokeWidth="2"
			></path>
			<path
				d="M -134.7445509836832,222 C 9.26,256.6 297.26,405.8 585.2554490163168,395 C 873.26,384.2 1017.26,160.2 1305.2554490163168,168 C 1593.26,175.8 1998.31,418.6 2025.2554490163168,434 C 2052.2,449.4 1557.05,282.8 1440,245"
				stroke="rgba(51, 121, 194, 0.58)"
				strokeWidth="2"
			></path>
		</g>
		<defs>
			<mask id="SvgjsMask1168">
				<rect width="1440" height="560" fill="#ffffff"></rect>
			</mask>
		</defs>
	</svg>
);
export default BgLines;
