import { useEffect } from "react";

//----------------------------------------------
const UseClickOutside = (callback: () => void) => {
	const handleClick = (e: MouseEvent) => {
		if (!(e.target as HTMLElement).closest('[data-click-outside="true"]')) {
			callback();
		}
	};

	useEffect(() => {
		document.addEventListener("mousedown", handleClick);

		return () => {
			document.removeEventListener("mousedown", handleClick);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [callback]);

	return (node: HTMLElement | null) => {
		if (node) {
			node.setAttribute("data-click-outside", "true");
		}
	};
};

export default UseClickOutside;
