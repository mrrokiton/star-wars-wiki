import { StarWarsStore } from '../../store/store-types';
import { processPlanetData } from '../helpers/planet-helpers';
import { ObjectWithPlanetsResults } from '../utils-types';
import { apiCall, url } from './basic-api';

export const getPlanetsData = async (page: number) => {
	try {
		const response = await apiCall<ObjectWithPlanetsResults>(
			`${url}/planets/?page=${page}`
		);
		return response;
	} catch (error) {
		throw error;
	}
};

export const storePlanetsData = async (store: StarWarsStore, page: number) => {
	try {
		const apiJSON = await getPlanetsData(page);
		const planetsArray = apiJSON.results;

		planetsArray.forEach((planet) => {
			const processedPlanet = processPlanetData(planet);
			store.addPlanet(processedPlanet.id, processedPlanet);
		});

		if (apiJSON.next) {
			await storePlanetsData(store, page + 1);
		}
	} catch (error) {
		console.error(`Error storing planet data for page ${page}:`, error);
		throw error;
	}
};
