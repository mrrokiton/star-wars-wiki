import { ItemData, PlanetIdData, VehicleIdData } from '../utils/utils-types';

export const testDataItems: ItemData[] = [
	{
		id: '1',
		name: 'testName1',
		pictureUrl: 'pictureUrl1',
	},
	{
		id: '2',
		name: 'AtestName2',
		pictureUrl: 'pictureUrl2',
	},
];

export const testDataPlanets: Array<PlanetIdData> = [
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

export const testDataVehicles: Array<VehicleIdData> = [
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
