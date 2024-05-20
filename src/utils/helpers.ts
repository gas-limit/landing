export const Stringify = (obj: any) => {
	return JSON.stringify(obj, null, 2);
};

export const Slugify = (text: string) => {
	return text
		.toLowerCase()
		.replace(/ /g, "-")
		.replace(/[^\w-]+/g, "");
};
