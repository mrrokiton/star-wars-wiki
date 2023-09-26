import { fireEvent, render } from '@testing-library/react';
import { StarWarsImage } from './star-wars-image';

describe(StarWarsImage, () => {
	const testUrl = 'someUrl.png';

	it('should render StarWarsImage with pictureUrl', () => {
		const { getByAltText } = render(<StarWarsImage pictureUrl={testUrl} />);
		const image = getByAltText('no image found');

		expect(image.getAttribute('src')).toEqual(testUrl);
	});

	it('should render StarWarsImage with no image picture', () => {
		const { getByAltText } = render(<StarWarsImage pictureUrl={testUrl} />);
		const image = getByAltText('no image found');

		fireEvent.error(image);

		expect(image.getAttribute('src')).toEqual('/src/assets/no-image.png');
	});
});
