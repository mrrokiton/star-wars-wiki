import { Link } from 'react-router-dom';
import { PresentingTileProps } from './presenting-tile-types';
import { StarWarsImage } from '../star-wars-image/star-wars-image';

import './presenting-tile.scss';

export const PresentingTile = ({
	id,
	name,
	pictureUrl,
	dataType,
}: PresentingTileProps) => (
	<Link to={`/${dataType}/${id}`} className='presenting-tile'>
		<div className='presenting-tile-content'>
			<StarWarsImage
				pictureUrl={pictureUrl}
				className='presenting-tile-image'
			/>
			<p className='presenting-tile-name'>{name}</p>
		</div>
	</Link>
);
