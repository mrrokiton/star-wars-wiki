import { store } from '../../store/store';
import { observer } from 'mobx-react';
import { PresentingList } from '../../components/presenting-lists/presenting-list';

import '../list-page.scss';

export const VehiclesPage = observer(() => {
	const vehicles = store.vehicles;

	return (
		<div className='list-page'>
			<div className='list-page-title'>VEHICLES</div>
			<PresentingList data={vehicles} dataType='vehicles' />
		</div>
	);
});
