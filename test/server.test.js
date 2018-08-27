
const { expect } = require('chai');
const axios = require('axios');

describe('API', () => {
	it('Responds with all articles', (done) => {
		const options = {
			url: 'http://localhost:4000/api/articles',
			method: 'get',
		};

		makeRequest(options)
			.then(({ articles }) => {
				expect(Array.isArray(articles), 'articles should be an array').to.equal(true);
				
				articles.forEach(a => {
					expect(typeof a.author, 'author is present').to.equal('string');
					expect(typeof a.title, 'title is present').to.equal('string');
					expect(typeof a.description, 'description is present').to.equal('string');
					expect(typeof a.long_description, 'long_description is present').to.equal('string');
					expect(typeof a.url, 'url is present').to.equal('string');
					expect(typeof a.urlToImage, 'urlToImage is present').to.equal('string');
					expect(typeof a.publishedAt, 'publishedAt is present').to.equal('string');
					expect(typeof a.id, 'api assigns id').to.equal('number');
				});
				
				done();
			})
			.catch(error => done(error));
	});
});

function makeRequest (options) {
	return axios(options).then(response => response.data);
}
