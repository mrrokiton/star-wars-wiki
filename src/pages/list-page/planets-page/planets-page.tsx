import { store } from '../../../store/store';
import { observer } from 'mobx-react';
import { PresentingList } from '../../../components/presenting-lists/presenting-list';

import '../list-page.scss';

export const PlanetsPage = observer(() => {
	const planets = store.planets;

	return (
		<div className='list-page'>
			<div className='list-page-title'>PLANETS</div>
			<PresentingList data={planets} dataType='planets' />
		</div>
	);
});
