import { PresentingTile } from '../presenting-tile/presenting-tile';
import { PresentingListProps } from './presenting-lists-types';

import './presenting-list.scss';
import { LoadingFooter } from '../loading-footer/loading-footer';

export const PresentingList = ({
	data,
	dataType,
	isLoading,
	error,
}: PresentingListProps) => {
	return (
		<>
			<div className='presenting-list'>
				{data.map((element) => {
					const { name, pictureUrl, id } = element;
					return (
						<PresentingTile
							id={id}
							name={name}
							pictureUrl={pictureUrl}
							dataType={dataType}
							key={id}
						/>
					);
				})}
			</div>
			<LoadingFooter isLoading={isLoading} error={error} />
		</>
	);
};
