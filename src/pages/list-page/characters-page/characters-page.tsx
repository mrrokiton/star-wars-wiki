import { store } from '../../../store/store';
import { observer } from 'mobx-react';
import { PresentingList } from '../../../components/presenting-lists/presenting-list';

import '../list-page.scss';

export const CharactersPage = observer(() => {
	const characters = store.characters;

	return (
		<div className='list-page'>
			<div className='list-page-title'>CHARACTERS</div>
			<PresentingList data={characters} dataType='people' />
		</div>
	);
});
