import { Route, Routes } from 'react-router-dom';
import { RoutePaths } from './route-paths.jsx';
import { CharactersPage } from '../list-page/characters-page/characters-page.tsx';
import { NotFound } from './not-found.tsx';
import { DetailsCharacterPage } from '../details-page/details-character-page/details-character-page.tsx';
import { PlanetsPage } from '../list-page/planets-page/planets-page.tsx';
import { VehiclesPage } from '../list-page/vehicles-page/vehicles-page.tsx';
import { DetailsPlanetPage } from '../details-page/details-planet-page/details-planet-page.tsx';
import { DetailsVehiclePage } from '../details-page/details-vehicles-page/details-vehicle-page.tsx';

export const Router = () => {
	return (
		<Routes>
			<Route path={RoutePaths.HOME} element={<CharactersPage />} />
			<Route path={RoutePaths.PLANETS} element={<PlanetsPage />} />
			<Route path={RoutePaths.VEHICLES} element={<VehiclesPage />} />
			<Route
				path={RoutePaths.DETAILS_PEOPLE}
				element={<DetailsCharacterPage />}
			/>
			<Route
				path={RoutePaths.DETAILS_PLANETS}
				element={<DetailsPlanetPage />}
			/>
			<Route
				path={RoutePaths.DETAILS_VEHICLES}
				element={<DetailsVehiclePage />}
			/>
			<Route path={RoutePaths.NOTFOUND} element={<NotFound />} />
		</Routes>
	);
};
