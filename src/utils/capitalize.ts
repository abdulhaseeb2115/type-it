// capitalize first letter of the string
const capitalize = (str: string): string => {
	return str.charAt(0).toUpperCase() + str.slice(1);
};

export default capitalize;
