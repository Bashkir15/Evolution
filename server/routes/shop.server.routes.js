import express from 'express'

let router = express.Router();

router.get('/', (req, res) => {
	res.render('./views/shop/shop');
});

module.exports = router;