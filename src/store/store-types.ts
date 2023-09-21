export type PlanetData = {
	name: string;
	population: number;
	charactersConnectedId: Array<string>;
	pictureUrl: string;
};

export type VehicleData = {
	name: string;
	type: string;
	charactersConnectedId: Array<string>;
	pictureUrl: string;
};

export type CharacterData = {
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

export interface IStore {
	isDownloading: boolean;

	characters: CharactersDictionary;
	vehicles: VehiclesDictionary;
	planets: PlanetsDictionary;

	addCharacter: (characterId: string, characterData: CharacterData) => void;
	addPlanet: (planetId: string, planetData: PlanetData) => void;
	addVehicle: (vehicleId: string, vehicleData: VehicleData) => void;
	setIsDownloading: (isDownloading: boolean) => void;
}
