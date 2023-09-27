import { RoutePaths } from '../route-paths.js';
import { Link } from 'react-router-dom';

export const NotFound = () => {
	return (
		<div>
			<h3>Page not found.</h3>
			<Link to={RoutePaths.HOME}>Go Home</Link>
		</div>
	);
};
