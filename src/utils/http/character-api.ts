import { StarWarsStore } from '../../store/store-types';
import { processCharacterData } from '../helpers/character-helpers';
import { ObjectWithCharactersResults } from '../utils-types';
import { apiCall, url } from './basic-api';

export const getCharactersData = async (page: number) => {
	try {
		const response = await apiCall<ObjectWithCharactersResults>(
			`${url}/people/?page=${page}`
		);
		return response;
	} catch (error) {
		throw error;
	}
};

export const storeCharactersData = async (
	store: StarWarsStore,
	page: number
) => {
	try {
		const apiJSON = await getCharactersData(page);
		const charactersArray = apiJSON.results;

		charactersArray.forEach((character) => {
			const processedCharacter = processCharacterData(character);
			store.addCharacter(processedCharacter.id, processedCharacter);
		});

		if (apiJSON.next) {
			await storeCharactersData(store, page + 1);
		}
	} catch (error) {
		console.error(`Error storing character data for page ${page}:`, error);
		throw error;
	}
};
