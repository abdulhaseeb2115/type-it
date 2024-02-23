export const truncateText = (text: string, num: number) =>
	text.length <= num ? text : `${text.slice(0, num)}...`;
