import { useEffect, useCallback, useState } from "react";

//
const UseKeyState = () => {
	const [pressedKey, setPressedKey] = useState<string | null>(null);

	const handleKeyPress = useCallback((event: KeyboardEvent) => {
		setPressedKey((event.key.trim() || event.code).toLowerCase());
	}, []);

	const handleKeyRelease = useCallback(() => {
		setPressedKey(null);
	}, []);

	useEffect(() => {
		document.addEventListener("keydown", handleKeyPress);
		document.addEventListener("keyup", handleKeyRelease);

		return () => {
			document.removeEventListener("keydown", handleKeyPress);
			document.removeEventListener("keyup", handleKeyRelease);
		};
	}, [handleKeyPress, handleKeyRelease]);

	return pressedKey;
};

export default UseKeyState;
