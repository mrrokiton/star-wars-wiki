import { CharacterData, PlanetData, VehicleData } from '../store/store-types';

export const testDataCharacters: Array<CharacterData> = [
	{
		id: '1',
		name: 'testName1',
		pictureUrl: 'pictureUrl1',
		planetId: 'planetId1',
		vehiclesId: [],
		speciesId: [],
	},
	{
		id: '2',
		name: 'AtestName2',
		pictureUrl: 'pictureUrl2',
		planetId: 'planetId2',
		vehiclesId: ['vehiclesId1', 'vehiclesId2'],
		speciesId: ['speciesId1', 'speciesId2'],
	},
];

export const testDataPlanets: Array<PlanetData> = [
	{
		id: '1',
		name: 'testName1',
		pictureUrl: 'pictureUrl1',
		population: 111,
		charactersConnectedId: [],
	},
	{
		id: '2',
		name: 'testName2',
		pictureUrl: 'pictureUrl2',
		population: 222,
		charactersConnectedId: ['1', '2'],
	},
];

export const testDataVehicles: Array<VehicleData> = [
	{
		id: '1',
		name: 'testName1',
		pictureUrl: 'pictureUrl1',
		charactersConnectedId: [],
		type: 'type1',
	},
	{
		id: '2',
		name: 'testName2',
		pictureUrl: 'pictureUrl2',
		charactersConnectedId: ['1', '2'],
		type: 'type1',
	},
];
