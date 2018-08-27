
import {
	FETCH_ARTICLES_BEGIN,
	FETCH_ARTICLES_SUCCESS,
	FETCH_ARTICLES_FAILURE,
	SELECT_ARTICLE,
	initialState,
} from '../constants';

const reducer = (state = initialState, action) => {
	switch (action.type) {
	case FETCH_ARTICLES_BEGIN:
		return {
			...state,
			loading: true,
			error: null,
		};
	case FETCH_ARTICLES_SUCCESS:
		return {
			...state,
			loading: false,
			articles: action.payload.articles,
			activeArticle: action.payload.articles[state.activeArticleIndex],
		};
	case FETCH_ARTICLES_FAILURE:
		return {
			...state,
			loading: false,
			error: action.payload.error,
			articles: [],
		};
	case SELECT_ARTICLE:
		return {
			...state,
			activeArticle: state.articles[action.payload.articleId],
		};
	case '@@router/LOCATION_CHANGE':
		const indexMatch = action.payload.location.pathname.match(/(?<=\/articles\/).*$/);
		return {
			...state,
			activeArticle: indexMatch ? state.articles[indexMatch[0]] : null,
			activeArticleIndex: indexMatch
		};
	default:
		return state;
	}
};

export default reducer;
