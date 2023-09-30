import { PresentingTile } from '../presenting-tile/presenting-tile';
import { PresentingListProps } from './presenting-lists-types';
import {
	PlanetData,
	VehicleData,
	CharacterData,
} from '../../store/store-types';

import './presenting-list.scss';

export const PresentingList = ({ data, dataType }: PresentingListProps) => {
	const sortedData: CharacterData[] | VehicleData[] | PlanetData[] =
		Object.values(data).sort((a, b) => (a.name > b.name ? 1 : -1));

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
