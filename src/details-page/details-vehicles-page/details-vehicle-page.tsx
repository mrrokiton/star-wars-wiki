import { observer } from 'mobx-react';
import { Link, useParams } from 'react-router-dom';
import { store } from '../../store/store';
import { StarWarsImage } from '../../components/star-wars-image/star-wars-image';

import '../details-page.scss';

export const DetailsVehiclePage = observer(() => {
	const params = useParams();
	const id = params.id ?? '1';

	const vehicle = store.vehicles[id];
	const characters = store.characters;

	return (
		<div className='details-page'>
			<StarWarsImage pictureUrl={vehicle.pictureUrl} />
			<p className='details-page-name'>{vehicle.name}</p>
			<p className='details-page-single-item'>{`Type: ${vehicle.type}`}</p>
			{vehicle.charactersConnectedId.length > 0 && (
				<div className='details-page-listing'>
					People: <br />
					{vehicle.charactersConnectedId.map((characterConnectedId, index) => (
						<Link
							className='details-page-listing-item'
							to={`/people/${characterConnectedId}`}
							key={index}
						>
							{characters[characterConnectedId].name}
						</Link>
					))}
				</div>
			)}
		</div>
	);
});
