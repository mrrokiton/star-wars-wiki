import { ItemData, RawItemData } from '../utils-types';
import { processItemData } from '../helpers/page-api-helper';

export const fetchData = async (
	url: string,
	dataType: 'people' | 'planets' | 'vehicles',
	setPage: React.Dispatch<React.SetStateAction<number>>,
	setItems: React.Dispatch<React.SetStateAction<ItemData[]>>,
	setIsLoading: React.Dispatch<React.SetStateAction<boolean>>,
	setIsEnd: React.Dispatch<React.SetStateAction<boolean>>,
	setError: React.Dispatch<any>
) => {
	setIsLoading(true);
	setError(null);

	try {
		const response = await fetch(url);
		const data = await response.json();

		const itemsArray = data.results;

		itemsArray.forEach((item: RawItemData) => {
			const processedItem = processItemData(item, dataType);
			setItems((previousData) => [...previousData, processedItem]);
		});

		if (!data.next) {
			setIsEnd(true);
		}
		setPage((previousPage) => previousPage + 1);
	} catch (error) {
		setIsLoading(false);
		setError(error);
	} finally {
		setIsLoading(false);
	}
};
