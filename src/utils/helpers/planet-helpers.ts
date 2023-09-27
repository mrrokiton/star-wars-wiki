import { PlanetData } from '../../store/store-types';
import { RawPlanetData } from '../utils-types';
import {
	peopleUrlPrefix,
	planetsUrlPrefix,
	starWarsVisualGuideImgsUrl,
} from './prefixes';

const generatePlanetsPictureUrl = (id: string) =>
	`${starWarsVisualGuideImgsUrl}planets/${id}.jpg`;

export const processPlanetData = (rawPlanetData: RawPlanetData): PlanetData => {
	const { url, name, population, residents } = rawPlanetData;

	const planetId = url.replace(planetsUrlPrefix, '').replace('/', '');
	const charactersConnectedId: Array<string> = [];
	residents.forEach((resident) =>
		charactersConnectedId.push(
			resident.replace(peopleUrlPrefix, '').replace('/', '')
		)
	);

	const planetData: PlanetData = {
		id: planetId,
		name,
		population: Number(population),
		charactersConnectedId,
		pictureUrl: generatePlanetsPictureUrl(planetId),
	};

	return planetData;
};
