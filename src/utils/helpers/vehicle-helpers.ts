import { RawVehicleData, VehicleIdData } from '../utils-types';
import {
	peopleUrlPrefix,
	starWarsVisualGuideImgsUrl,
	vehiclesUrlPrefix,
} from './prefixes';

const generateVehiclesPictureUrl = (id: string) =>
	`${starWarsVisualGuideImgsUrl}vehicles/${id}.jpg`;

export const processVehicleData = (
	rawVehicleData: RawVehicleData
): VehicleIdData => {
	const { url, name, vehicle_class, pilots } = rawVehicleData;

	const vehicleId = url.replace(vehiclesUrlPrefix, '').replace('/', '');
	const charactersConnectedId: Array<string> = [];
	pilots.forEach((pilot) =>
		charactersConnectedId.push(
			pilot.replace(peopleUrlPrefix, '').replace('/', '')
		)
	);

	const vehicleData: VehicleIdData = {
		id: vehicleId,
		name,
		type: vehicle_class,
		charactersConnectedId,
		pictureUrl: generateVehiclesPictureUrl(vehicleId),
	};

	return vehicleData;
};
