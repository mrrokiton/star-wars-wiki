import { NavLink } from 'react-router-dom';
import { RoutePaths } from '../../general/route-paths';

import './navigation-bar.scss';

export const NavigationBar = () => (
	<div className='navigation-bar'>
		<p className='navigation-bar-header'>Collections</p>
		<div className='navigation-bar-items'>
			<NavLink
				className={({ isActive }) => (isActive ? 'active' : '')}
				to={RoutePaths.HOME}
			>
				PEOPLE
			</NavLink>
			<NavLink
				className={({ isActive }) => (isActive ? 'active' : '')}
				to={RoutePaths.PLANETS}
			>
				PLANETS
			</NavLink>
			<NavLink
				className={({ isActive }) => (isActive ? 'active' : '')}
				to={RoutePaths.VEHICLES}
			>
				VEHICLES
			</NavLink>
		</div>
	</div>
);
