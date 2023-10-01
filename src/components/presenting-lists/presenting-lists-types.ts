import { ItemData, StarWarsError } from '../../utils/utils-types';

interface CharactersList {
	dataType: 'people';
	data: ItemData[];
	isLoading: boolean;
	error: StarWarsError | null;
}

interface VehiclesList {
	dataType: 'vehicles';
	data: ItemData[];
	isLoading: boolean;
	error: StarWarsError | null;
}

interface PlanetsList {
	dataType: 'planets';
	data: ItemData[];
	isLoading: boolean;
	error: StarWarsError | null;
}

export type PresentingListProps = CharactersList | VehiclesList | PlanetsList;
