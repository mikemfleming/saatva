
export const FETCH_ARTICLES_BEGIN = 'FETCH_ARTICLES_BEGIN';
export const FETCH_ARTICLES_SUCCESS = 'FETCH_ARTICLES_SUCCESS';
export const FETCH_ARTICLES_FAILURE = 'FETCH_ARTICLES_FAILURE';
export const SELECT_ARTICLE = 'SELECT_ARTICLE';

export const ARTICLES_URL = '/api/articles';

export const fetchArticlesBegin = () => ({
	type: FETCH_ARTICLES_BEGIN,
});

export const fetchArticlesSuccess = articles => ({
	type: FETCH_ARTICLES_SUCCESS,
	payload: { articles },
});

export const fetchArticlesFailure = error => ({
	type: FETCH_ARTICLES_FAILURE,
	payload: { error },
});

export const selectArticle = articleId =>({
	type: SELECT_ARTICLE,
	payload: { articleId },
});

export const initialState = {
	articles: [],
	activeArticle: null,
	loading: false,
	error: null,
};