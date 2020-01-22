const express = require('express');

const app = express();
const data = {
	message: 'Welcome to the Austin Bennett API',
	value: 'Here is the value',
	results: 3,
};

// write the API here
app.get('/api', (req, res) => {
	res.status(200).send(data);
});

app.get('/', (req, res) => {
	res.status(200).send('Welcome to the Austin Bennett API');
});

// export app for the tests
module.exports = app;
