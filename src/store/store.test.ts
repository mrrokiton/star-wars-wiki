import {
	testDataCharacters,
	testDataPlanets,
	testDataVehicles,
} from '../mock-data/data-arrays';
import { store } from './store';

describe('store', () => {
	it('should be initialized with default values', () => {
		expect(store.downloadingStatus).toEqual('downloading');
		expect(store.characters).toEqual({});
		expect(store.vehicles).toEqual({});
		expect(store.planets).toEqual({});
	});

	it('should change downloadingStatus', () => {
		store.setDownloadingStatus('done');

		expect(store.downloadingStatus).toEqual('done');
	});

	it('should add character to the store', () => {
		const characterData = testDataCharacters[0];

		store.addCharacter('1', characterData);

		expect(store.characters).toEqual({ '1': characterData });
	});

	it('should add vehicle to the store', () => {
		const vehicleData = testDataVehicles[0];

		store.addVehicle('1', vehicleData);

		expect(store.vehicles).toEqual({ '1': vehicleData });
	});

	it('should add planet to the store', () => {
		const planetData = testDataPlanets[0];

		store.addPlanet('1', planetData);

		expect(store.planets).toEqual({ '1': planetData });
	});
});
