import React from 'react';

import {
	FacebookShareButton,
	FacebookIcon,
	TwitterShareButton,
	TwitterIcon,
	EmailShareButton,
	EmailIcon,
} from 'react-share';

export default ({ url, title }) => (
	<div className="social mv2 w-100">
		<FacebookShareButton
			url={url}
			quote={title}
			className="Demo__some-network__share-button dib fr">
			<FacebookIcon
				size={32}
				round />
		</FacebookShareButton>
		<TwitterShareButton
			url={url}
			title={title}
			className="Demo__some-network__share-button dib fr ml1 mr1">
			<TwitterIcon
				size={32}
				round />
		</TwitterShareButton>
		<EmailShareButton
			url={url}
			subject={title}
			body="body"
			className="Demo__some-network__share-button dib fr">
			<EmailIcon
				size={32}
				round />
		</EmailShareButton>
	</div>
);
