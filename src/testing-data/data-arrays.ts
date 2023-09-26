import { CharacterData, PlanetData, VehicleData } from '../store/store-types';

export const testDataCharacters: Array<CharacterData> = [
	{
		name: 'testName1',
		pictureUrl: 'pictureUrl1',
		planetId: 'planetId1',
		vehiclesId: [],
		speciesId: [],
	},
	{
		name: 'AtestName2',
		pictureUrl: 'pictureUrl2',
		planetId: 'planetId2',
		vehiclesId: ['vehiclesId1', 'vehiclesId2'],
		speciesId: ['speciesId1', 'speciesId2'],
	},
];

export const testDataPlanets: Array<PlanetData> = [
	{
		name: 'testName1',
		pictureUrl: 'pictureUrl1',
		population: 111,
		charactersConnectedId: [],
	},
	{
		name: 'testName2',
		pictureUrl: 'pictureUrl2',
		population: 222,
		charactersConnectedId: ['1', '2'],
	},
];

export const testDataVehicles: Array<VehicleData> = [
	{
		name: 'testName1',
		pictureUrl: 'pictureUrl1',
		charactersConnectedId: [],
		type: 'type1',
	},
	{
		name: 'testName2',
		pictureUrl: 'pictureUrl2',
		charactersConnectedId: ['1', '2'],
		type: 'type1',
	},
];
