// add suffixes based on the number
export const addSuffix = (num: number): string => {
	if (num <= 0) return "";
	if ([11, 12, 13].includes(num % 100)) {
		return num + "th";
	}
	const lastDigit = num % 10;
	switch (lastDigit) {
		case 1:
			return num + "st";
		case 2:
			return num + "nd";
		case 3:
			return num + "rd";
		default:
			return num + "th";
	}
};
