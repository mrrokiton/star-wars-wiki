import { StarWarsStore } from '../../store/store-types';
import { storeCharactersData } from '../http/character-api';
import { storePlanetsData } from '../http/planet-api';
import { storeVehiclesData } from '../http/vehicle-api';

export const getAllData = async (store: StarWarsStore) => {
	try {
		await storeCharactersData(store, 1);
		await storePlanetsData(store, 1);
		await storeVehiclesData(store, 1);

		store.setDownloadingStatus('done');
	} catch {
		store.setDownloadingStatus('error');
	}
};

export const getStarWarsData = (store: StarWarsStore) => {
	getAllData(store);
};
