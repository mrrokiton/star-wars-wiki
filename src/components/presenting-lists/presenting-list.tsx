import { PresentingTile } from '../presenting-tile/presenting-tile';
import { PresentingListProps } from './presenting-lists-types';
import {
	PlanetData,
	VehicleData,
	CharacterData,
} from '../../store/store-types';

import './presenting-list.scss';
import { store } from '../../store/store';

export const PresentingList = ({ data, dataType }: PresentingListProps) => {
	console.log(store.characters);
	const sortedData: CharacterData[] | VehicleData[] | PlanetData[] =
		Object.values(data).sort((a, b) => (a.name > b.name ? 1 : -1));

	console.log(sortedData);

	return (
		<div className='presenting-list'>
			{sortedData.map((element) => {
				const { name, pictureUrl, id } = element;
				return (
					<PresentingTile
						id={id}
						name={name}
						pictureUrl={pictureUrl}
						dataType={dataType}
						key={id}
					/>
				);
			})}
		</div>
	);
};
