import {
	CharactersDictionary,
	PlanetsDictionary,
	VehiclesDictionary,
} from '../store/store-types';
import {
	testDataCharacters,
	testDataPlanets,
	testDataVehicles,
} from './data-arrays';

export const testCharactersDictionary: CharactersDictionary = {
	'1': testDataCharacters[0],
	'2': testDataCharacters[1],
};

export const testPlanetsDictionary: PlanetsDictionary = {
	'1': testDataPlanets[0],
	'2': testDataPlanets[1],
};

export const testVehiclesDictionary: VehiclesDictionary = {
	'1': testDataVehicles[0],
	'2': testDataVehicles[1],
};
