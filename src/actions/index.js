import axios from 'axios';

import {
	fetchArticlesBegin,
	fetchArticlesSuccess,
	ARTICLES_URL,
	fetchArticlesFailure,
} from '../constants';

export const getArticles = () => {
	return dispatch => {
		dispatch(fetchArticlesBegin());
		return axios.get(ARTICLES_URL)
			.then(({ data }) => {
				dispatch(fetchArticlesSuccess(data.articles));
				return data.articles;
			})
			.catch(response => dispatch(fetchArticlesFailure(response)));
	};
};

export const handleSelectArticle = () => {
	window.scrollTo(0, 0);
	return null;
};
