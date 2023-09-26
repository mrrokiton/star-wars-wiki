import { useState } from 'react';
import defaultImage from '../../assets/no-image.png';
import { StarWarsImageProps } from './star-wars-image-types';

export const StarWarsImage = ({
	pictureUrl,
	className,
}: StarWarsImageProps) => {
	const [urlError, setUrlError] = useState(false);

	const errorHandler = () => {
		// event.preventDefault(); // It is not possible to suppress that error log
		setUrlError(true);
	};

	return (
		<img
			src={urlError ? defaultImage : pictureUrl}
			onError={errorHandler}
			alt='no image found'
			className={className}
		/>
	);
};
