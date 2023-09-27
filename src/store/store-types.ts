export type PlanetData = {
	id: string;
	name: string;
	population: number;
	charactersConnectedId: Array<string>;
	pictureUrl: string;
};

export type VehicleData = {
	id: string;
	name: string;
	type: string;
	charactersConnectedId: Array<string>;
	pictureUrl: string;
};

export type CharacterData = {
	id: string;
	name: string;
	pictureUrl: string;
	planetId: string;
	vehiclesId: Array<string>;
	speciesId: Array<string>;
};

export type CharactersDictionary = {
	[id: string]: CharacterData;
};

export type VehiclesDictionary = {
	[id: string]: VehicleData;
};

export type PlanetsDictionary = {
	[id: string]: PlanetData;
};

export type SpiecesDictionary = {
	[id: string]: string;
};

export type DownloadingStatus = 'done' | 'downloading' | 'error';

export interface StarWarsStore {
	downloadingStatus: DownloadingStatus;

	characters: CharactersDictionary;
	vehicles: VehiclesDictionary;
	planets: PlanetsDictionary;

	addCharacter: (characterId: string, characterData: CharacterData) => void;
	addPlanet: (planetId: string, planetData: PlanetData) => void;
	addVehicle: (vehicleId: string, vehicleData: VehicleData) => void;
	setDownloadingStatus: (downloadingStatus: DownloadingStatus) => void;
}
