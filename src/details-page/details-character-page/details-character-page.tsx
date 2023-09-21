import { observer } from 'mobx-react';
import { Link, useParams } from 'react-router-dom';
import { store } from '../../store/store';

export const DetailsCharacterPage = observer(() => {
	const params = useParams();
	const id = params.id ?? '1';

	const character = store.characters[id];
	const vehicles = store.vehicles;
	const planets = store.planets;

	return (
		<div>
			<img src={character.pictureUrl} alt='no image found' />
			<p>{character.name}</p>
			<p>{character.speciesId}</p>
			{planets[character.planetId] && (
				<Link to={`/planets/${character.planetId}`}>
					{planets[character.planetId].name}
				</Link>
			)}
			<div>
				{character.vehiclesId.map(
					(vehicleId, index) =>
						vehicles[vehicleId] && (
							<Link to={`/vehicles/${vehicleId}`} key={index}>
								{vehicles[vehicleId].name}
							</Link>
						)
				)}
			</div>
		</div>
	);
});
