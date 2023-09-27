import { action, makeObservable, observable } from 'mobx';
import {
	CharactersDictionary,
	PlanetsDictionary,
	VehiclesDictionary,
	CharacterData,
	StarWarsStore,
	PlanetData,
	VehicleData,
	DownloadingStatus,
} from './store-types';

class Store implements StarWarsStore {
	downloadingStatus: DownloadingStatus = 'downloading';

	characters: CharactersDictionary = {};
	vehicles: VehiclesDictionary = {};
	planets: PlanetsDictionary = {};

	constructor() {
		makeObservable(this, {
			downloadingStatus: observable,
			characters: observable,
			vehicles: observable,
			planets: observable,
			setDownloadingStatus: action,
			addCharacter: action,
			addPlanet: action,
			addVehicle: action,
		});
	}

	setDownloadingStatus = (isDownloading: DownloadingStatus) => {
		this.downloadingStatus = isDownloading;
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
