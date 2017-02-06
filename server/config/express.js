import express from 'express'
import morgan from 'morgan'
import bodyParser from 'body-parser'
import compression from 'compression'
import helmet from 'helmet'
import ejs from 'ejs'
import path from 'path'
import expressValidator from 'express-validator'
import expressStatusMonitor from 'express-status-monitor'

import indexRoutes from '../routes/index.server.routes'
import contactRoutes from '../routes/contact.server.routes'
import shopRoutes from '../routes/shop.server.routes'

module.exports = () => {
	const publicPath = path.join(__dirname, '../../public');
	const modulePath = path.join(__dirname, '../../node_modules');
	const distPath = path.join(__dirname, '../../dist');

	const app = express();

	app.set('view engine', 'ejs');
	app.set('views', publicPath);

	app.use(expressStatusMonitor());
	app.use(compression());
	app.use(morgan('dev'));
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({extended: true}));
	app.use(expressValidator());
	app.use(helmet());
	app.use((req, res, next) => {
		res.setHeader('Access-Control-Allow-Origin', '*');
		res.setHeader('Access-Control-Allow-Methods', "GET, POST, PUT, DELETE");
		res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, content-type, Authorization');
		next();
	});

	app.use(express.static(publicPath));
	app.use(express.static(modulePath));
	app.use(express.static(distPath));

	app.use('/', indexRoutes);
	app.use('/contact', contactRoutes);
	app.use('/shop', shopRoutes);


	return app;
};