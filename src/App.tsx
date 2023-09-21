import { NavigationBar } from './components/navigation-bar/navigation-bar';
import { Router } from './general/router.tsx';
import { getStarWarsData } from './import-data-functions/import-data-functions.ts';
import { useEffect } from 'react';
import { observer } from 'mobx-react';
import { store } from './store/store.ts';

import './App.scss';
import { Loading } from './general/loading.tsx';

const App = observer(() => {
	useEffect(() => getStarWarsData(store), []);

	console.log(store.characters);
	console.log(store.planets);

	return store.isDownloading ? (
		<Loading />
	) : (
		<>
			<NavigationBar />
			<div className='main-page-container'>
				<Router />
			</div>
		</>
	);
});

export default App;
