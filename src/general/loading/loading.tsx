import loadingGif from '../../assets/gifs/loading.gif';

import './loading.scss';

export const Loading = ({ isError }: { isError: boolean }) => {
	const messageLoading = (
		<>
			<img src={loadingGif} alt='loading gif' />
			<p>Loading...</p>
			<p>it might take a minute</p>
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
				{isError ? messageError : messageLoading}
			</div>
		</div>
	);
};
