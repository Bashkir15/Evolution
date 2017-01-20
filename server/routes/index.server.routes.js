import express from 'express'

let router = express.Router();

router.get('/', (req, res) => {
	res.render('index');
});

router.get('/about', (req, res) => {
	res.render('./views/about/about');
});

router.get('/news', (req, res) => {
	res.render('./views/news/news');
});

module.exports = router;