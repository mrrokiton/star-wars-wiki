import { PresentingTile } from '../presenting-tile/presenting-tile';
import { PresentingListProps } from './presenting-lists-types';

import './presenting-list.scss';

export const PresentingList = ({ data, dataType }: PresentingListProps) => {
	const sortedData = Object.entries(data)
		.map(([id, values]) => ({
			id,
			...values,
		}))
		.sort((a, b) => (a.name > b.name ? 1 : -1));

	return (
		<div className='presenting-list'>
			{sortedData.map((element) => {
				const { name, pictureUrl, id } = element;
				return (
					<PresentingTile {...{ id, name, pictureUrl, dataType }} key={id} />
				);
			})}
		</div>
	);
};
