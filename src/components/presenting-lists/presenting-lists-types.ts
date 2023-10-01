import { ItemData } from '../../utils/utils-types';

interface CharactersList {
	dataType: 'people';
	data: ItemData[];
	isLoading: boolean;
	error: any;
}

interface VehiclesList {
	dataType: 'vehicles';
	data: ItemData[];
	isLoading: boolean;
	error: any;
}

interface PlanetsList {
	dataType: 'planets';
	data: ItemData[];
	isLoading: boolean;
	error: any;
}

export type PresentingListProps = CharactersList | VehiclesList | PlanetsList;
