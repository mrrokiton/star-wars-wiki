import { StarWarsStore } from '../../store/store-types';
import { processVehicleData } from '../helpers/vehicle-helpers';
import { ObjectWithVehiclerResults } from '../utils-types';
import { apiCall, url } from './basic-api';

export const getVehiclesData = async (page: number) => {
	try {
		const response = await apiCall<ObjectWithVehiclerResults>(
			`${url}/vehicles/?page=${page}`
		);
		return response;
	} catch (error) {
		throw error;
	}
};

export const storeVehiclesData = async (store: StarWarsStore, page: number) => {
	try {
		const apiJSON = await getVehiclesData(page);
		const vehiclesArray = apiJSON.results;

		vehiclesArray.forEach((vehicle) => {
			const processedVehicle = processVehicleData(vehicle);
			store.addVehicle(processedVehicle.id, processedVehicle);
		});

		if (apiJSON.next) {
			await storeVehiclesData(store, page + 1);
		}
	} catch (error) {
		console.error(`Error storing vehicle data for page ${page}:`, error);
		throw error;
	}
};
