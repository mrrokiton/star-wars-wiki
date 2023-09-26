import { RoutePaths } from './route-paths.js';
import { Link } from 'react-router-dom';

export const NotFound = () => {
	return (
		<div className='flex flex-col items-center'>
			<h3 className='px-3 py-2 text-lg text-base font-medium'>
				Page not found.
			</h3>
			<Link to={RoutePaths.HOME}>Go Home</Link>
		</div>
	);
};
