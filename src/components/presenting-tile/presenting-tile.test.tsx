import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import { PresentingTile } from './presenting-tile';
import { testDataCharacters } from '../../testing-data/data-arrays';

describe(PresentingTile, () => {
	it('should render PresentingTile', () => {
		const { name, pictureUrl } = testDataCharacters[0];
		const id = '1';
		const { container } = render(
			<PresentingTile {...{ id, name, pictureUrl }} dataType='people' />,
			{ wrapper: BrowserRouter }
		);
		const presentingTile = container.getElementsByClassName('presenting-tile');

		expect(presentingTile).toBeTruthy();
	});

	it('should render PresentingTile with correct data', () => {
		const { name, pictureUrl } = testDataCharacters[0];
		const id = '1';
		const { container } = render(
			<PresentingTile {...{ id, name, pictureUrl }} dataType='people' />,
			{ wrapper: BrowserRouter }
		);
		const presentingTileName = container.getElementsByTagName('p');
		const presentingTileImage = container.getElementsByTagName('img');

		expect(presentingTileName[0].textContent).toEqual(`name: ${name}`);
		expect(presentingTileImage[0].src).toEqual(
			`http://localhost:3000/${pictureUrl}`
		);
	});

	it('should redirect to correct details page', () => {
		const { name, pictureUrl } = testDataCharacters[0];
		const id = '1';
		const { container } = render(
			<PresentingTile {...{ id, name, pictureUrl }} dataType='people' />,
			{ wrapper: BrowserRouter }
		);
		const presentingTile = container.getElementsByTagName('a');

		expect(presentingTile[0].href).toEqual(
			`http://localhost:3000/people/${id}`
		);
	});
});
