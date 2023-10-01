import { StarWarsError } from '../../utils/utils-types';
import './loading-footer.scss';

export const LoadingFooter = ({
	isLoading,
	error,
}: {
	isLoading: boolean;
	error: StarWarsError | null;
}) => {
	const footerContent = () => {
		const errorContent = (
			<>
				<p>Error, please refresh page</p>
				<p>{error && error.message}</p>
			</>
		);
		const loadingContent = <p>Loading more data...</p>;

		if (error) {
			return errorContent;
		}

		if (isLoading) {
			return loadingContent;
		}

		return;
	};

	return <div className='loading-footer'>{footerContent()}</div>;
};
