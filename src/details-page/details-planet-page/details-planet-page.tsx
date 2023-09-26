import { observer } from 'mobx-react';
import { Link, useParams } from 'react-router-dom';
import { store } from '../../store/store';
import { StarWarsImage } from '../../components/star-wars-image/star-wars-image';

import '../details-page.scss';

export const DetailsPlanetPage = observer(() => {
	const params = useParams();
	const id = params.id ?? '1';

	const planet = store.planets[id];
	const characters = store.characters;

	return (
		<div className='details-page'>
			<StarWarsImage pictureUrl={planet.pictureUrl} />
			<p className='details-page-name'>{planet.name}</p>
			<p className='details-page-single-item'>{`Population: ${planet.population}`}</p>
			{planet.charactersConnectedId.length > 0 && (
				<div className='details-page-listing'>
					People: <br />
					{planet.charactersConnectedId.map((characterConnectedId, index) => (
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
