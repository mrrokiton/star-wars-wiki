import loadingGif from '../../assets/gifs/loading.gif';

import './loading.scss';

export const Loading = ({ error }: { error: any }) => {
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
