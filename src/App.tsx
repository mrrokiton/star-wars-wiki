import { NavigationBar } from './components/navigation-bar/navigation-bar';
import { Router } from './general/router/router.tsx';
import { getStarWarsData } from './utils/helpers/general-helpers.ts';
import { useEffect } from 'react';
import { observer } from 'mobx-react';
import { store } from './store/store.ts';
import { Loading } from './general/loading/loading.tsx';

import './App.scss';

const App = observer(() => {
	useEffect(() => {
		getStarWarsData(store);
	}, []);

	let appPage;

	if (store.downloadingStatus === 'done') {
		appPage = (
			<>
				<NavigationBar />
				<div className='main-page-container'>
					<Router />
				</div>
			</>
		);
	} else {
		const isError = store.downloadingStatus === 'error' ? true : false;
		appPage = <Loading isError={isError} />;
	}

	return appPage;
});

export default App;
