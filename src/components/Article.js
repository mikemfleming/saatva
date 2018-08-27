import React from 'react';
import { connect } from 'react-redux';

import { ImageWrapper } from '../styles';

import Social from './Social';
import Error from './Error';

const Article = ({ activeArticle }) => (
	<div className="article fl w-100 pa2 pa2 bb">
		{
			!activeArticle
				? <Error />
				: (
					<div className="pa4">
						<h1 className="ttu tc">{activeArticle.title}</h1>
						<ImageWrapper>
							<img src={activeArticle.urlToImage} />
						</ImageWrapper>
						<Social
							url={activeArticle.url}
							title={activeArticle.title}
						/>
						<div className="content fl">
							<strong className="f3">{activeArticle.description}</strong>
							<div dangerouslySetInnerHTML={{ __html: activeArticle.long_description }}></div>
						</div>
					</div>
				)
		}
	</div>
);

const mapStateToProps = state => ({ activeArticle: state.activeArticle });

export default connect(mapStateToProps)(Article);
