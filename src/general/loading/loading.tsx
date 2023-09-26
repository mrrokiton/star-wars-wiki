import loadingGif from '../../assets/gifs/loading.gif';

import './loading.scss';

export const Loading = () => (
	<div className='loading-page'>
		<div className='loading-page-container'>
			<img src={loadingGif} alt='loading gif' />
			<p>Loading...</p>
			<p>it might take a minute</p>
		</div>
	</div>
);
