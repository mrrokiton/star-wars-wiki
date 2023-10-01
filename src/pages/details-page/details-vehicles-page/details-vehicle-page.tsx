import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { StarWarsImage } from '../../../components/star-wars-image/star-wars-image';
import { NotFound } from '../../../general/not-found/not-found';
import { StarWarsError, VehicleData } from '../../../utils/utils-types';
import { fetchVehicleData } from '../../../utils/http/vehicle-api';
import { Loading } from '../../../components/loading/loading';

import '../details-page.scss';

export const DetailsVehiclePage = () => {
	const { id } = useParams();

	if (!id) {
		return <NotFound />;
	}

	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [error, setError] = useState<StarWarsError | null>(null);
	const [vehicle, setVehicle] = useState<VehicleData>();

	useEffect(() => {
		fetchVehicleData(id, setVehicle, setIsLoading, setError);
	}, []);

	if (error || isLoading) {
		return <Loading error={error} />;
	}

	return (
		vehicle && (
			<div className='details-page'>
				<StarWarsImage pictureUrl={vehicle.pictureUrl} />
				<p className='details-page-name'>{vehicle.name}</p>
				<p className='details-page-single-item'>{`Type: ${vehicle.type}`}</p>
				{vehicle.charactersConnectedId.length > 0 && (
					<div className='details-page-listing'>
						People: <br />
						{vehicle.charactersConnectedId.map(
							(characterId: string) =>
								vehicle.charactersConnectedNames[characterId] && (
									<Link
										to={`/people/${characterId}`}
										key={characterId}
										className='details-page-listing-item'
									>
										{vehicle.charactersConnectedNames[characterId]}
									</Link>
								)
						)}
					</div>
				)}
			</div>
		)
	);
};
