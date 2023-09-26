import { Link } from 'react-router-dom';
import { PresentingTileProps } from './presenting-tile-types';

import './presenting-tile.scss';
import { StarWarsImage } from '../star-wars-image/star-wars-image';

export const PresentingTile = ({
	id,
	name,
	pictureUrl,
	dataType,
}: PresentingTileProps) => (
	<Link to={`/${dataType}/${id}`} className='presenting-tile'>
		<p className='presenting-tile-name'>{`name: ${name}`}</p>
		<StarWarsImage pictureUrl={pictureUrl} className='presenting-tile-image' />
	</Link>
);
