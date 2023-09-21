import { observer } from 'mobx-react';
import { useParams } from 'react-router-dom';
import { store } from '../../store/store';

export const DetailsPlanetPage = observer(() => {
	const params = useParams();
	const id = params.id ?? '1';

	const planet = store.planets[id];

	return (
		<div>
			<img src={planet.pictureUrl} alt='no image found' />
			<p>{planet.name}</p>
			<p>{planet.charactersConnectedId}</p>
			<p>{planet.population}</p>
		</div>
	);
});
