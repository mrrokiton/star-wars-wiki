import loadingGif from '../../assets/gifs/loading.gif';
import { StarWarsError } from '../../utils/utils-types';

import './loading.scss';

export const Loading = ({ error }: { error: StarWarsError | null }) => {
	const messageLoading = (
		<>
			<img src={loadingGif} alt='loading gif' />
			<p>Loading...</p>
			<p>it might take a second</p>
		</>
	);

	const messageError = (
		<>
			<p>Loading data error</p>
			<p>Please refresh</p>
		</>
	);
	return (
		<div className='loading-page'>
			<div className='loading-page-container'>
				{error ? messageError : messageLoading}
			</div>
		</div>
	);
};
