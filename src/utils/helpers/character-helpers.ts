import { RawCharacterData } from '../utils-types';
import {
	peopleUrlPrefix,
	planetsUrlPrefix,
	speciesUrlPrefix,
	starWarsVisualGuideImgsUrl,
	vehiclesUrlPrefix,
} from './prefixes';
import { CharacterData } from '../../store/store-types';

const generatePeoplePictureUrl = (id: string) =>
	`${starWarsVisualGuideImgsUrl}characters/${id}.jpg`;

export const processCharacterData = (
	rawCharacterData: RawCharacterData
): CharacterData => {
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
		id: characterId,
		name,
		planetId,
		vehiclesId,
		speciesId,
		pictureUrl: generatePeoplePictureUrl(characterId),
	};

	return characterData;
};
