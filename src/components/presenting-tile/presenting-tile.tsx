import { useNavigate } from 'react-router-dom';
import { PresentingTileProps } from './presenting-tile-types';

import './presenting-tile.scss';

export const PresentingTile = ({
	id,
	name,
	pictureUrl,
	dataType,
}: PresentingTileProps) => {
	const navigate = useNavigate();

	return (
		<div
			className='presenting-tile'
			onClick={() => navigate(`/${dataType}/${id}`)}
		>
			<p>{`name: ${name}`}</p>
			<img src={pictureUrl} alt='no photo available' />
		</div>
	);
};
