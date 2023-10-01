import { peopleUrlPrefix, vehiclesUrlPrefix } from '../helpers/prefixes';
import { fetchName } from './names-api';
import { VehicleData, basicDictionary } from '../utils-types';
import { processVehicleData } from '../helpers/vehicle-helpers';

export const fetchVehicleData = async (
	id: string,
	setVehicle: React.Dispatch<VehicleData>,
	setIsLoading: React.Dispatch<React.SetStateAction<boolean>>,
	setError: React.Dispatch<any>
) => {
	setIsLoading(true);
	setError(null);

	const vehicleUrl = `${vehiclesUrlPrefix}${id}`;

	try {
		const response = await fetch(vehicleUrl);
		const data = await response.json();

		const processedVehicleData = processVehicleData(data);

		const charactersConnectedId = processedVehicleData.charactersConnectedId;
		const charactersConnectedNames = {} as basicDictionary;

		await Promise.all(
			charactersConnectedId.map(
				async (itemId) =>
					(charactersConnectedNames[itemId] = await fetchName(
						`${peopleUrlPrefix}${itemId}`
					))
			)
		);

		const vehicle = {
			...processedVehicleData,
			charactersConnectedNames,
		};

		setVehicle(vehicle);
	} catch (error) {
		setIsLoading(false);
		setError(error);
	} finally {
		setIsLoading(false);
	}
};
