export const fetchName = async (url: string): Promise<string> => {
	try {
		const response = await fetch(url);
		const data = await response.json();

		return data.name;
	} catch (error) {
		throw error;
	}
};
