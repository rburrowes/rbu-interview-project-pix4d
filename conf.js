exports.config = {
	seleniumAddress : 'http://localhost:4444/wd/hub',
	specs : [ 'droneFlightPlanning.js' ],

	capabilities : {
		'browserName' : 'firefox'
	}
};