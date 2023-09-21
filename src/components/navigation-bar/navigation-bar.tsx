import { Link } from 'react-router-dom';
import './navigation-bar.scss';
import { RoutePaths } from '../../general/route-paths';

export const NavigationBar = () => (
	<div className='navigation-bar'>
		<p className='navigation-bar-header'>NAVBAR</p>
		<div className='navigation-bar-items'>
			<Link to={RoutePaths.HOME}>PEOPLE</Link>
			<Link to={RoutePaths.PLANETS}>PLANETS</Link>
			<Link to={RoutePaths.VEHICLES}>VEHICLES</Link>
		</div>
	</div>
);
