import { BrowserRouter } from 'react-router-dom';
import { NavigationBar } from './navigation-bar';
import { render } from '@testing-library/react';

describe(NavigationBar, () => {
	it('should render NavigationBar', () => {
		const { container } = render(<NavigationBar />, { wrapper: BrowserRouter });
		const navigationBar = container.getElementsByClassName('navigation-bar');

		expect(navigationBar).toBeTruthy();
	});

	it('should render link for each category in order', () => {
		const { container } = render(<NavigationBar />, { wrapper: BrowserRouter });
		const navigationBarItems = container.getElementsByTagName('a');

		expect(navigationBarItems[0].text).toBe('PEOPLE');
		expect(navigationBarItems[1].text).toBe('PLANETS');
		expect(navigationBarItems[2].text).toBe('VEHICLES');
	});
});
