export type RawCharacterData = {
	url: string;
	name: string;
	homeworld: string;
	vehicles: Array<string>;
	species: Array<string>;
};

export type RawVehicleData = {
	url: string;
	name: string;
	vehicle_class: string;
	pilots: Array<string>;
};

export type RawPlanetData = {
	url: string;
	name: string;
	population: string;
	residents: Array<string>;
};

export type RawItemData = {
	url: string;
	name: string;
};

export type ItemData = {
	id: string;
	name: string;
	pictureUrl: string;
};

export type PlanetIdData = {
	id: string;
	name: string;
	pictureUrl: string;
	population: number;
	charactersConnectedId: Array<string>;
};

export type VehicleIdData = {
	id: string;
	name: string;
	type: string;
	charactersConnectedId: Array<string>;
	pictureUrl: string;
};

export type CharacterIdData = {
	id: string;
	name: string;
	pictureUrl: string;
	planetId: string;
	vehiclesId: Array<string>;
	speciesId: Array<string>;
};

export type CharacterData = {
	id: string;
	name: string;
	pictureUrl: string;
	planetId: string;
	vehiclesId: Array<string>;
	speciesId: Array<string>;
	speciesName: string;
	vehiclesNames: basicDictionary;
	planetName: string;
};

export type PlanetData = {
	id: string;
	name: string;
	pictureUrl: string;
	population: number;
	charactersConnectedId: Array<string>;
	charactersConnectedNames: basicDictionary;
};

export type VehicleData = {
	id: string;
	name: string;
	pictureUrl: string;
	type: string;
	charactersConnectedId: Array<string>;
	charactersConnectedNames: basicDictionary;
};

export type basicDictionary = { [id: string]: string };

//TODO: UNION
