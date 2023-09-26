import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import { PresentingList } from './presenting-list';
import {
	testCharactersDictionary,
	testPlanetsDictionary,
	testVehiclesDictionary,
} from '../../testing-data/data-dictionaries';

describe(PresentingList, () => {
	it('should render list with 2 character elements', () => {
		const { container } = render(
			<PresentingList dataType='people' data={testCharactersDictionary} />,
			{ wrapper: BrowserRouter }
		);
		const presentingTiles = container.getElementsByClassName('presenting-tile');

		expect(presentingTiles).toHaveLength(2);
	});

	it('should render list with 2 planets elements', () => {
		const { container } = render(
			<PresentingList dataType='planets' data={testPlanetsDictionary} />,
			{ wrapper: BrowserRouter }
		);
		const presentingTiles = container.getElementsByClassName('presenting-tile');

		expect(presentingTiles).toHaveLength(2);
	});

	it('should render list with 2 vehicles elements', () => {
		const { container } = render(
			<PresentingList dataType='vehicles' data={testVehiclesDictionary} />,
			{ wrapper: BrowserRouter }
		);
		const presentingTiles = container.getElementsByClassName('presenting-tile');

		expect(presentingTiles).toHaveLength(2);
	});

	it('should render empty list', () => {
		const { container } = render(
			<PresentingList dataType='vehicles' data={{}} />,
			{ wrapper: BrowserRouter }
		);
		const presentingTiles = container.getElementsByClassName('presenting-tile');

		expect(presentingTiles).toHaveLength(0);
	});

	it('should render empty list', () => {
		const { container } = render(
			<PresentingList dataType='vehicles' data={{}} />,
			{ wrapper: BrowserRouter }
		);
		const presentingTiles = container.getElementsByClassName('presenting-tile');

		expect(presentingTiles).toHaveLength(0);
	});

	it('should render sorted list by characters names', () => {
		const { container } = render(
			<PresentingList dataType='people' data={testCharactersDictionary} />,
			{ wrapper: BrowserRouter }
		);
		const presentingTiles = container.getElementsByTagName('p');

		expect(presentingTiles[0].textContent).toEqual(
			testCharactersDictionary['2'].name
		);
		expect(presentingTiles[1].textContent).toEqual(
			testCharactersDictionary['1'].name
		);
	});
});
