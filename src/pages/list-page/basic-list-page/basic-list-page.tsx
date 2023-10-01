import { PresentingList } from '../../../components/presenting-lists/presenting-list';
import { useEffect, useState } from 'react';
import { fetchData } from '../../../utils/http/page-api';
import { ListPageProps } from './basic-list-page-types';
import { ItemData } from '../../../utils/utils-types';

import '../list-page.scss';

const baseUrl = 'https://swapi.dev/api';

export const BasicListPage = ({ dataType }: ListPageProps) => {
	const [items, setItems] = useState<ItemData[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [isEnd, setIsEnd] = useState<boolean>(false);
	const [isPageFull, setIsPageFull] = useState<boolean>(false);
	const [error, setError] = useState<any>(null);
	const [page, setPage] = useState(1);

	const getHeader = () => {
		switch (dataType) {
			case 'people':
				return 'CHARACTERS';
			case 'planets':
				return 'PLANETS';
			case 'vehicles':
				return 'VEHICLES';
			default:
				return '';
		}
	};

	const handleFetchData = () => {
		const url = `${baseUrl}/${dataType}/?page=${page}`;
		fetchData(
			url,
			dataType,
			setPage,
			setItems,
			setIsLoading,
			setIsEnd,
			setError
		);
		console.log(items);
	};

	const fillPageWithData = () => {
		const hasVerticalScrollbar =
			document.body.scrollHeight > window.innerHeight;

		if (!hasVerticalScrollbar && !isLoading) {
			handleFetchData();
		} else {
			if (hasVerticalScrollbar) {
				setIsPageFull(true);
			}
		}
	};

	const handleScroll = () => {
		if (
			window.innerHeight + document.documentElement.scrollTop !==
				document.documentElement.offsetHeight ||
			isLoading
		) {
			return;
		}

		handleFetchData();
	};

	useEffect(() => {
		handleFetchData();
	}, []);

	useEffect(() => {
		if (!isPageFull) {
			fillPageWithData();
		}
		if (!isEnd) {
			window.addEventListener('scroll', handleScroll);
		}
		return () => window.removeEventListener('scroll', handleScroll);
	}, [isLoading]);

	return (
		<div className='list-page'>
			<div className='list-page-title'>{getHeader()}</div>
			<PresentingList
				data={items}
				dataType={dataType}
				isLoading={isLoading}
				error={error}
			/>
		</div>
	);
};
