import { useEffect, useState } from "react";

type Props = {
	text: string;
	duration?: number;
};

const UseTextAnimation = ({ text, duration = 2 }: Props) => {
	const [currentKey, setCurrentKey] = useState<string | null>(null);
	const [currentKeyIndex, setCurrentKeyIndex] = useState<number>(-1);

	useEffect(() => {
		let animationInterval: NodeJS.Timeout;

		const animateText = () => {
			let i = 0;
			animationInterval = setInterval(() => {
				setCurrentKeyIndex(i);
				const content = text[i];
				const key = content === " " ? "space" : content;

				setCurrentKey(key);

				setTimeout(() => {
					setCurrentKey(null);
				}, duration * 300);

				i = i === text.length - 1 ? 0 : i + 1;
			}, duration * 1000);
		};

		animateText();

		return () => {
			clearInterval(animationInterval);
		};
	}, [text, duration]);

	return { key: currentKey, index: currentKeyIndex };
};

export default UseTextAnimation;
