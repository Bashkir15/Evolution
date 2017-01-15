import cluster from 'cluster'
import http from 'http'
import expressConifg from './server/config/express'
const appConfig = require('./server/config/env/' + (process.env.NODE_ENV || 'development'));

if (cluster.isMaster) {
	let cpuCount = require('os').cpus().length;
	let i;

	for (i = 0; i < cpuCount; i++) {
		cluster.fork();
	}

	cluster.on('exit', (worker) => {
		console.log('worker %d died', worker.id);
		cluster.fork();
	});
} else {
	let app = expressConifg();
	let server = http.Server(app);

	server.listen(appConfig.server.port, () => {
		console.log(`Application is up and running at ${appConfig.server.host}${appConfig.server.post} and the environment is currently: ${process.env.NODE_ENV || 'development'}`);
	});

	console.log('Worker %d running!', cluster.worker.id);

	global.config = appConfig;

	module.exports = app;
}

