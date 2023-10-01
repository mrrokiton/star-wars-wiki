import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { StarWarsImage } from '../../../components/star-wars-image/star-wars-image';
import { NotFound } from '../../../general/not-found/not-found';
import { fetchCharacterData } from '../../../utils/http/character-api';
import { CharacterData, StarWarsError } from '../../../utils/utils-types';
import { Loading } from '../../../components/loading/loading';

import '../details-page.scss';

export const DetailsCharacterPage = () => {
	const { id } = useParams();

	if (!id) {
		return <NotFound />;
	}

	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [error, setError] = useState<StarWarsError | null>(null);
	const [character, setCharacter] = useState<CharacterData>();

	useEffect(() => {
		fetchCharacterData(id, setCharacter, setIsLoading, setError);
	}, []);

	console.log(isLoading, !isLoading && character);

	if (error || isLoading) {
		return <Loading error={error} />;
	}

	return (
		character && (
			<div className='details-page'>
				<StarWarsImage pictureUrl={character.pictureUrl} />
				<p className='details-page-name'>{character.name}</p>
				<p className='details-page-single-item'>{`Species: ${
					character.speciesName ?? 'Human'
				}`}</p>
				{character.planetName && (
					<Link
						to={`/planets/${character.planetId}`}
						className='details-page-single-item'
					>
						Planet: <u>{character.planetName}</u>
					</Link>
				)}
				{character.vehiclesId.length > 0 && (
					<div className='details-page-listing'>
						Vehicles:
						{character.vehiclesId.map(
							(vehicleId: string) =>
								character.vehiclesNames[vehicleId] && (
									<Link
										to={`/vehicles/${vehicleId}`}
										key={vehicleId}
										className='details-page-listing-item'
									>
										{character.vehiclesNames[vehicleId]}
									</Link>
								)
						)}
					</div>
				)}
			</div>
		)
	);
};
