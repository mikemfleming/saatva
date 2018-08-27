const express = require('express');
const path = require('path');
const log = require('./logger');
const pino = require('pino-http')({ logger: log });
const axios = require('axios');
const fs = require('fs');

const app = express();

app.use(pino);

const getUrl = (url) => axios.get(url).then(({ data }) => data);

const favicon = fs.readFileSync('./favicon.png');
app.get('/favicon.png', (req, res) => res.send(favicon));

app.get('/api/articles', (req, res) => {
	getUrl('https://s3-us-west-2.amazonaws.com/saatva-hiring/news.json')
		.then(data => {
			data.articles = data.articles.map((a, i) => {
				a.id = i;
				return a;
			});
			return res.json(data);
		});
});

app.get('*/script.js', (req, res) => res.sendFile(path.join(__dirname, 'dist/bundle.js')));
app.get('*', (req, res) => res.sendFile(path.join(__dirname, './index.html')));

app.listen(4000, () => log.info('listening on 4000'));
