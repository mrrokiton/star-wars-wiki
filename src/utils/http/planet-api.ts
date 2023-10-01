import { peopleUrlPrefix, planetsUrlPrefix } from '../helpers/prefixes';
import { fetchName } from './names-api';
import { PlanetData, basicDictionary } from '../utils-types';
import { processPlanetData } from '../helpers/planet-helpers';

export const fetchPlanetData = async (
	id: string,
	setPlanet: React.Dispatch<PlanetData>,
	setIsLoading: React.Dispatch<React.SetStateAction<boolean>>,
	setError: React.Dispatch<any>
) => {
	setIsLoading(true);
	setError(null);

	const planetUrl = `${planetsUrlPrefix}${id}`;

	try {
		const response = await fetch(planetUrl);
		const data = await response.json();

		const processedPlanetData = processPlanetData(data);

		const charactersConnectedId = processedPlanetData.charactersConnectedId;
		const charactersConnectedNames = {} as basicDictionary;

		await Promise.all(
			charactersConnectedId.map(
				async (itemId) =>
					(charactersConnectedNames[itemId] = await fetchName(
						`${peopleUrlPrefix}${itemId}`
					))
			)
		);

		const planet = {
			...processedPlanetData,
			charactersConnectedNames,
		};

		setPlanet(planet);
	} catch (error) {
		setIsLoading(false);
		setError(error);
	} finally {
		setIsLoading(false);
	}
};
