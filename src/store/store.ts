import { action, makeObservable, observable } from 'mobx';
import {
	CharactersDictionary,
	PlanetsDictionary,
	VehiclesDictionary,
	CharacterData,
	IStore,
	PlanetData,
	VehicleData,
} from './store-types';

class Store implements IStore {
	isDownloading = true;

	characters: CharactersDictionary = {};
	vehicles: VehiclesDictionary = {};
	planets: PlanetsDictionary = {};

	constructor() {
		makeObservable(this, {
			isDownloading: observable,
			characters: observable,
			vehicles: observable,
			planets: observable,
			setIsDownloading: action,
			addCharacter: action,
			addPlanet: action,
			addVehicle: action,
		});
	}

	setIsDownloading = (isDownloading: boolean) => {
		this.isDownloading = isDownloading;
	};

	addCharacter = (characterId: string, characterData: CharacterData) => {
		this.characters[characterId] = characterData;
	};

	addPlanet = (planetId: string, planetData: PlanetData) => {
		this.planets[planetId] = planetData;
	};

	addVehicle = (vehicleId: string, vehicleData: VehicleData) => {
		this.vehicles[vehicleId] = vehicleData;
	};
}

export const store = new Store();
