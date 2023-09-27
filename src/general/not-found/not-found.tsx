import { RoutePaths } from '../route-paths.js';
import { Link } from 'react-router-dom';

import './not-found.scss';

export const NotFound = () => {
	return (
		<div className='not-found'>
			<div className='not-found-container'>
				<h3>Page not found.</h3>
				<Link to={RoutePaths.HOME} className='not-found-link'>
					Go Home
				</Link>
			</div>
		</div>
	);
};
