import {
	peopleUrlPrefix,
	planetsUrlPrefix,
	speciesUrlPrefix,
	vehiclesUrlPrefix,
} from '../helpers/prefixes';
import { processCharacterData } from '../helpers/character-helpers';
import { fetchName } from './names-api';
import { CharacterData, basicDictionary } from '../utils-types';

export const fetchCharacterData = async (
	id: string,
	setCharacter: React.Dispatch<CharacterData>,
	setIsLoading: React.Dispatch<React.SetStateAction<boolean>>,
	setError: React.Dispatch<any>
) => {
	setIsLoading(true);
	setError(null);

	const characterUrl = `${peopleUrlPrefix}${id}`;

	try {
		const response = await fetch(characterUrl);
		const data = await response.json();

		const processedCharacterData = processCharacterData(data);

		const planetId = processedCharacterData.planetId;
		const speciesId = processedCharacterData.speciesId[0];
		const vehiclesId = processedCharacterData.vehiclesId;

		const planetName = await fetchName(`${planetsUrlPrefix}${planetId}`);
		const speciesName = await fetchName(`${speciesUrlPrefix}${speciesId}`);
		const vehiclesNames = {} as basicDictionary;

		await Promise.all(
			vehiclesId.map(
				async (itemId) =>
					(vehiclesNames[itemId] = await fetchName(
						`${vehiclesUrlPrefix}${itemId}`
					))
			)
		);

		const character = {
			...processedCharacterData,
			planetName,
			speciesName,
			vehiclesNames,
		};

		setCharacter(character);
	} catch (error) {
		setIsLoading(false);
		setError(error);
	} finally {
		setIsLoading(false);
	}
};
