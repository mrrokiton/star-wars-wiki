import { Link, useParams } from 'react-router-dom';
import { StarWarsImage } from '../../../components/star-wars-image/star-wars-image';
import { NotFound } from '../../../general/not-found/not-found';
import { useEffect, useState } from 'react';
import { fetchPlanetData } from '../../../utils/http/planet-api';
import { PlanetData, StarWarsError } from '../../../utils/utils-types';
import { Loading } from '../../../components/loading/loading';

import '../details-page.scss';

export const DetailsPlanetPage = () => {
	const { id } = useParams();

	if (!id) {
		return <NotFound />;
	}

	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [error, setError] = useState<StarWarsError | null>(null);
	const [planet, setPlanet] = useState<PlanetData>();

	useEffect(() => {
		fetchPlanetData(id, setPlanet, setIsLoading, setError);
	}, []);

	console.log(isLoading, !isLoading && planet);

	if (error || isLoading) {
		return <Loading error={error} />;
	}

	return (
		planet && (
			<div className='details-page'>
				<StarWarsImage pictureUrl={planet.pictureUrl} />
				<p className='details-page-name'>{planet.name}</p>
				<p className='details-page-single-item'>{`Population: ${
					planet.population.toString() === 'NaN' ? 'Unknown' : planet.population
				}`}</p>
				{planet.charactersConnectedId.length > 0 && (
					<div className='details-page-listing'>
						People: <br />
						{planet.charactersConnectedId.map(
							(characterId: string) =>
								planet.charactersConnectedNames[characterId] && (
									<Link
										to={`/people/${characterId}`}
										key={characterId}
										className='details-page-listing-item'
									>
										{planet.charactersConnectedNames[characterId]}
									</Link>
								)
						)}
					</div>
				)}
			</div>
		)
	);
};
