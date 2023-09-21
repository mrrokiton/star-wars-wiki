import { PresentingTile } from '../presenting-tile/presenting-tile';
import { PresentingListProps } from './presenting-lists-types';

import './presenting-list.scss';

export const PresentingList = ({ data, dataType }: PresentingListProps) => (
	<div className='presenting-list'>
		{Object.entries(data).map(([id, element]) => {
			const { name, pictureUrl } = element;
			return (
				<div className='presenting-list-element' key={id}>
					<PresentingTile {...{ name, pictureUrl, id, dataType }} />
				</div>
			);
		})}
	</div>
);
