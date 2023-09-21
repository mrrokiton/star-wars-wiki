import { IStore } from '../store/store-types';
import {
	ObjectWithCharactersResults,
	ObjectWithPlanetsResults,
	ObjectWithVehiclerResults,
} from './import-data-functions-types';
import {
	processCharacterData,
	processPlanetData,
	processVehicleData,
} from './process-data-functions';

const url = 'https://swapi.dev/api';

const apiCall = <T>(url: string): Promise<T> => {
	return fetch(url).then((response) => {
		if (!response.ok) {
			throw new Error(response.statusText);
		}
		return response.json() as Promise<T>;
	});
};

const getCharactersData = async (page: number) => {
	return await apiCall<ObjectWithCharactersResults>(
		`${url}/people/?page=${page.toString()}`
	);
};

const storeCharactersData = async (store: IStore, page: number) => {
	const apiJSON = await getCharactersData(page);
	const charactersArray = apiJSON.results;

	charactersArray.forEach((character) => {
		const processedCharacter = processCharacterData(character);
		const characterId = processedCharacter[0];
		const characterData = processedCharacter[1];
		store.addCharacter(characterId, characterData);
	});

	apiJSON.next && (await storeCharactersData(store, page + 1));
};

const getPlanetsData = async (page: number) => {
	return await apiCall<ObjectWithPlanetsResults>(
		`${url}/planets/?page=${page.toString()}`
	);
};

const storePlanetsData = async (store: IStore, page: number) => {
	const apiJSON = await getPlanetsData(page);
	const planetsArray = apiJSON.results;

	planetsArray.forEach((planet) => {
		const processedPlanet = processPlanetData(planet);
		const planetId = processedPlanet[0];
		const planetData = processedPlanet[1];
		store.addPlanet(planetId, planetData);
	});

	apiJSON.next && (await storePlanetsData(store, page + 1));
};

const getVehiclesData = async (page: number) => {
	return await apiCall<ObjectWithVehiclerResults>(
		`${url}/vehicles/?page=${page.toString()}`
	);
};

const storeVehiclesData = async (store: IStore, page: number) => {
	const apiJSON = await getVehiclesData(page);
	const vehiclesArray = apiJSON.results;

	vehiclesArray.forEach((vehicle) => {
		const processedVehicle = processVehicleData(vehicle);
		const vehicleId = processedVehicle[0];
		const vehicleData = processedVehicle[1];
		store.addVehicle(vehicleId, vehicleData);
	});

	apiJSON.next && (await storeVehiclesData(store, page + 1));
};

const getAllData = async (store: IStore) => {
	await storeCharactersData(store, 1);
	await storePlanetsData(store, 1);
	await storeVehiclesData(store, 1);

	store.setIsDownloading(false);
};

export const getStarWarsData = (store: IStore) => {
	getAllData(store);
};
