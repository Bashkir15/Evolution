import browserSync from 'browser-sync'

export const server = browserSync.create();

export function serve(done) {
	server.init({
		server: {
			baseDir: '/',
			directory: true
		},
		port: 7000,
		proxy: 'http://localhost:8000'
	}, done);
}