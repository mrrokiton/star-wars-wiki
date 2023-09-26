import { Link, useLocation } from 'react-router-dom';
import { RoutePaths } from '../../general/route-paths';

import './navigation-bar.scss';

export const NavigationBar = () => {
	const location = useLocation();
	const locationPath = location.pathname;

	const isActiveCollection = (linkPath: string): string =>
		locationPath === linkPath ? 'active' : 'inactive';

	return (
		<div className='navigation-bar'>
			<p className='navigation-bar-header'>Collections</p>
			<div className='navigation-bar-items'>
				<Link
					className={isActiveCollection(RoutePaths.HOME)}
					to={RoutePaths.HOME}
				>
					PEOPLE
				</Link>
				<Link
					className={isActiveCollection(RoutePaths.PLANETS)}
					to={RoutePaths.PLANETS}
				>
					PLANETS
				</Link>
				<Link
					className={isActiveCollection(RoutePaths.VEHICLES)}
					to={RoutePaths.VEHICLES}
				>
					VEHICLES
				</Link>
			</div>
		</div>
	);
};
