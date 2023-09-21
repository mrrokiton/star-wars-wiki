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

export type ObjectWithCharactersResults = {
	results: Array<RawCharacterData>;
	next: string | null;
};

export type ObjectWithVehiclerResults = {
	results: Array<RawVehicleData>;
	next: string | null;
};

export type ObjectWithPlanetsResults = {
	results: Array<RawPlanetData>;
	next: string | null;
};
