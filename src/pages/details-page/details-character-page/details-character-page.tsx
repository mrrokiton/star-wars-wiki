import { useEffect, useState } from 'react';
import { observer } from 'mobx-react';
import { Link, useParams } from 'react-router-dom';
import { store } from '../../../store/store';
import { StarWarsImage } from '../../../components/star-wars-image/star-wars-image';
import { getSpeciesName } from '../../../utils/http/species-api';
import { CharacterData } from '../../../store/store-types';

import '../details-page.scss';

export const DetailsCharacterPage = observer(() => {
	const params = useParams();
	const id = params.id ?? '1';

	const character: CharacterData = store.characters[id];
	const vehicles = store.vehicles;
	const planets = store.planets;
	const [speciesName, setSpeciesName] = useState('');

	useEffect(() => {
		if (character.speciesId.length > 0) {
			const getSpecies = async () =>
				setSpeciesName(await getSpeciesName(character.speciesId[0]));
			getSpecies();
		} else {
			setSpeciesName('Human');
		}
	}, []);

	return (
		<div className='details-page'>
			<StarWarsImage pictureUrl={character.pictureUrl} />
			<p className='details-page-name'>{character.name}</p>
			<p className='details-page-single-item'>{`Species: ${speciesName}`}</p>
			{planets[character.planetId] && (
				<Link
					to={`/planets/${character.planetId}`}
					className='details-page-single-item'
				>
					Planet: <u>{planets[character.planetId].name}</u>
				</Link>
			)}
			{character.vehiclesId.length > 0 && (
				<div className='details-page-listing'>
					Vehicles:
					{character.vehiclesId.map(
						(vehicleId) =>
							vehicles[vehicleId] && (
								<Link
									to={`/vehicles/${vehicleId}`}
									key={vehicleId}
									className='details-page-listing-item'
								>
									{vehicles[vehicleId].name}
								</Link>
							)
					)}
				</div>
			)}
		</div>
	);
});
