import {
	CharactersDictionary,
	PlanetsDictionary,
	VehiclesDictionary,
} from '../../store/store-types';

interface CharactersList {
	dataType: 'people';
	data: CharactersDictionary;
}

interface VehiclesList {
	dataType: 'vehicles';
	data: VehiclesDictionary;
}

interface PlanetsList {
	dataType: 'planets';
	data: PlanetsDictionary;
}

export type PresentingListProps = CharactersList | VehiclesList | PlanetsList;
