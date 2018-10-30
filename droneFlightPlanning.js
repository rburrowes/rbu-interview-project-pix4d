describe('Successful flight plan map image point insertion', function() {
	it('Given the application is loaded', function() {
		browser.get('https://stupendous-birth.surge.sh');
		browser.sleep(1500);

		// Jasmine assertions
		expect(element(by.css("h2[class='md-toolbar-item md-breadcrumb md-headline']")).getText()).toBe("Drone Flight Planner")

		element(by.css("h2[class='md-toolbar-item md-breadcrumb md-headline']")).getText().then(
				function(text) {
					console.log(text);
				})
	})
	it('And the map image is displayed in the main panel', function() {
	})
	it('And the left side panel displays all registered flight plans', function() {
	})
	it('When the main panel is clicked', function() {
	})
	it('Then the first flight plan point is inserted to the clicked location', function() {
	})
})