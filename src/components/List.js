import React from 'react';
import { handleSelectArticle } from '../actions';
import { connect } from 'react-redux';

import ListItem from './ListItem';

class List extends React.Component {
	render () {
		const { articles, activeArticle } = this.props;
		
		return (
			<div className="article-list fl">
				{
					articles.map(a => (
						<ListItem 
							article={a} 
							onClick={handleSelectArticle}
							isActive={activeArticle == a}
						/>
					))
				}
			</div>
		);
	}
}

const mapStateToProps = state => ({ articles: state.articles });

export default connect(mapStateToProps)(List);
