import { ObjectWithSpeciesResults } from '../utils-types';
import { apiCall, url } from './basic-api';

export const getSpeciesName = async (speciesId: string) => {
	try {
		const apiJSON = await apiCall<ObjectWithSpeciesResults>(
			`${url}/species/${speciesId}`
		);
		const species = apiJSON.name;
		return species;
	} catch (error) {
		console.error('Error fetching species data, error');
		return 'Failed to fetch - please refresh';
	}
};
