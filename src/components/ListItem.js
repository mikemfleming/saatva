import React from 'react';
import { Link } from 'react-router-dom';

import { ArticleIcon } from '../styles';

export default ({ article, onClick, isActive }) => (
	<Link to={`/articles/${article.id}`} >
		<ArticleIcon
			className={`ba tc pa1 lh-copy pointer pv4 ba bl-0 bt-0 br-0 b--dotted b--black-30 ${isActive ? 'isActive' : ''}`}
			onClick={onClick}
			imageUrl={article.urlToImage}
		>
			{article.title}
		</ArticleIcon>
	</Link>
);
