import React from 'react';
import { getArticles } from '../actions';
import { connect } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router';

import Nav from './Nav';
import List from './List';
import Article from './Article';
import { Main, AppWrapper } from '../styles';
import Browse from './Browse';

class App extends React.Component {
	componentDidMount () {
		this.props.dispatch(getArticles());
	}
  
	render () {
		const { error, loading, articles, activeArticle } = this.props;

		if (error) {
			return <div>Error! {JSON.stringify(error, null, 4)}</div>;
		}
		
		return (
			<AppWrapper>
				<Nav />
				{
					loading
						? null
						: (
							<Main>
								<List
									articles={articles}
									activeArticle={activeArticle}	
								/>
								<Switch>
									<Route path="/articles/:articleId" component={Article} />
									<Route path="/" exact component={Browse} />
									<Redirect to="/" component={Browse}/>
								</Switch>
							</Main>
						)
				}
			</AppWrapper>
		);
	}
}

const mapStateToProps = state => ({
	articles: state.articles,
	activeArticle: state.activeArticle,
	loading: state.loading,
	error: state.error,
});

export default connect(mapStateToProps)(App);
