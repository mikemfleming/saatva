import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Browse = (props) => {
	const { articles } = props;

	return (
		<div className="article tc fl w-100 pa2 pa2">
			<h2>Browse Articles by Author</h2>
			{
				articles.map(a => <Link to={`/articles/${a.id}`}><h4>{a.author}</h4></Link>)
			}
		</div>
	);
};

const mapStateToProps = state => ({
	activeArticle: state.activeArticle,
	articles: state.articles,
});

export default connect(mapStateToProps)(Browse);

