import { NavigationBar } from './components/navigation-bar/navigation-bar';
import { Router } from './general/router/router.tsx';

import './App.scss';

const App = () => (
	<>
		<NavigationBar />
		<div className='main-page-container'>
			<Router />
		</div>
	</>
);

export default App;
