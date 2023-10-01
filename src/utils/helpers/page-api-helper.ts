import { ItemData, RawItemData } from '../utils-types';
import {
	peopleUrlPrefix,
	planetsUrlPrefix,
	starWarsVisualGuideImgsUrl,
	vehiclesUrlPrefix,
} from './prefixes';

const generatePictureUrl = (id: string, dataType: string) =>
	`${starWarsVisualGuideImgsUrl}${dataType}/${id}.jpg`;

const getIdFromUrl = (
	url: string,
	dataType: 'people' | 'planets' | 'vehicles'
) => {
	if (dataType === 'people') {
		return url.replace(peopleUrlPrefix, '').replace('/', '');
	}

	if (dataType === 'planets') {
		return url.replace(planetsUrlPrefix, '').replace('/', '');
	}

	return url.replace(vehiclesUrlPrefix, '').replace('/', '');
};

export const processItemData = (
	rawItemData: RawItemData,
	dataType: 'people' | 'planets' | 'vehicles'
): ItemData => {
	const { url, name } = rawItemData;

	const id = getIdFromUrl(url, dataType);
	const fixedDataType = dataType === 'people' ? 'characters' : dataType;

	const itemData: ItemData = {
		id: id,
		name,
		pictureUrl: generatePictureUrl(id, fixedDataType),
	};

	console.log(itemData.pictureUrl);

	return itemData;
};
