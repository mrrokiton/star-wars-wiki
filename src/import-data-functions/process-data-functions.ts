import { CharacterData, PlanetData, VehicleData } from '../store/store-types';
import {
	RawCharacterData,
	RawPlanetData,
	RawVehicleData,
} from './import-data-functions-types';

const peopleUrlPrefix = 'https://swapi.dev/api/people/';
const vehiclesUrlPrefix = 'https://swapi.dev/api/vehicles/';
const planetsUrlPrefix = 'https://swapi.dev/api/planets/';
const speciesUrlPrefix = 'https://swapi.dev/api/species/';

const starWarsVisualGuideImgsUrl =
	'https://starwars-visualguide.com/assets/img/';

const generatePeoplePictureUrl = (id: string) =>
	`${starWarsVisualGuideImgsUrl}characters/${id}.jpg`;

const generatePlanetsPictureUrl = (id: string) =>
	`${starWarsVisualGuideImgsUrl}planets/${id}.jpg`;

const generateVehiclesPictureUrl = (id: string) =>
	`${starWarsVisualGuideImgsUrl}vehicles/${id}.jpg`;

export const processCharacterData = (
	rawCharacterData: RawCharacterData
): [string, CharacterData] => {
	const { url, name, homeworld, vehicles, species } = rawCharacterData;

	const characterId = url.replace(peopleUrlPrefix, '').replace('/', '');
	const planetId = homeworld.replace(planetsUrlPrefix, '').replace('/', '');
	const vehiclesId: Array<string> = [];
	vehicles.forEach((vehicle) =>
		vehiclesId.push(vehicle.replace(vehiclesUrlPrefix, '').replace('/', ''))
	);
	const speciesId: Array<string> = [];

	species.forEach((species) =>
		speciesId.push(species.replace(speciesUrlPrefix, '').replace('/', ''))
	);

	const characterData: CharacterData = {
		name,
		planetId,
		vehiclesId,
		speciesId,
		pictureUrl: generatePeoplePictureUrl(characterId),
	};

	return [characterId, characterData];
};

export const processPlanetData = (
	rawPlanetData: RawPlanetData
): [string, PlanetData] => {
	const { url, name, population, residents } = rawPlanetData;

	const planetId = url.replace(planetsUrlPrefix, '').replace('/', '');
	const charactersConnectedId: Array<string> = [];
	residents.forEach((resident) =>
		charactersConnectedId.push(
			resident.replace(peopleUrlPrefix, '').replace('/', '')
		)
	);

	const planetData: PlanetData = {
		name,
		population: Number(population),
		charactersConnectedId,
		pictureUrl: generatePlanetsPictureUrl(planetId),
	};

	return [planetId, planetData];
};

export const processVehicleData = (
	rawVehicleData: RawVehicleData
): [string, VehicleData] => {
	const { url, name, vehicle_class, pilots } = rawVehicleData;

	const vehicleId = url.replace(vehiclesUrlPrefix, '').replace('/', '');
	const charactersConnectedId: Array<string> = [];
	pilots.forEach((pilot) =>
		charactersConnectedId.push(
			pilot.replace(peopleUrlPrefix, '').replace('/', '')
		)
	);

	const planetData: VehicleData = {
		name,
		type: vehicle_class,
		charactersConnectedId,
		pictureUrl: generateVehiclesPictureUrl(vehicleId),
	};

	return [vehicleId, planetData];
};
