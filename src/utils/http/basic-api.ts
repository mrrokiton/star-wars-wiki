export const url = 'https://swapi.dev/api';

export const apiCall = <T>(apiUrl: string): Promise<T> => {
	return fetch(apiUrl).then((response) => {
		if (!response.ok) {
			throw new Error(response.statusText);
		}
		return response.json() as Promise<T>;
	});
};
