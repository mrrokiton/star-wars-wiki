import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import { PresentingList } from './presenting-list';
import { testDataItems } from '../../mock-data/data-arrays';

describe(PresentingList, () => {
	it('should render list with 2 character elements', () => {
		const { container } = render(
			<PresentingList
				dataType='people'
				data={testDataItems}
				isLoading={false}
				error={null}
			/>,
			{ wrapper: BrowserRouter }
		);
		const presentingTiles = container.getElementsByClassName('presenting-tile');

		expect(presentingTiles).toHaveLength(2);
	});

	it('should render empty list', () => {
		const { container } = render(
			<PresentingList
				dataType='vehicles'
				data={[]}
				isLoading={false}
				error={null}
			/>,
			{ wrapper: BrowserRouter }
		);
		const presentingTiles = container.getElementsByClassName('presenting-tile');

		expect(presentingTiles).toHaveLength(0);
	});
});
