import { observer } from 'mobx-react';
import { useParams } from 'react-router-dom';
import { store } from '../../store/store';

export const DetailsVehiclePage = observer(() => {
	const params = useParams();
	const id = params.id ?? '1';

	const vehicle = store.vehicles[id];

	return (
		<div>
			<img src={vehicle.pictureUrl} alt='no image found' />
			<p>{vehicle.name}</p>
			<p>{vehicle.charactersConnectedId}</p>
			<p>{vehicle.type}</p>
		</div>
	);
});
