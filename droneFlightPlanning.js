describe('Successful flight plan map image point insertion',
		function() {
		it('Given the web application launch is complete',
				function() {
				browser.get('https://stupendous-birth.surge.sh');
				browser.sleep(1500);

				// assertions
				expect(element(by.css("h2[class='md-toolbar-item md-breadcrumb md-headline']")).getText())
					.toBe("Drone Flight Planner")
				expect(element(by.buttonText('Create a new Flight Planadd')).getText())
					.toBe("CREATE A NEW FLIGHT PLANadd")
				mapImg = element(by.css("img[src='./assets/screen-shot.png']"))
				expect(mapImg.isPresent()).toBe(true)

				// logging
				element(by.css("h2[class='md-toolbar-item md-breadcrumb md-headline']"))
					.getText().then(
						function(titleText) {
						console.log("Title text is: " + titleText);
						}
					)
				element(by.buttonText('Create a new Flight Planadd'))
					.getText().then(
						function(buttonText) {
						console.log("Button text is: " + buttonText);
						}
					)
				element(by.css("img[src='./assets/screen-shot.png']"))
					.getText().then(
						function(imgFile)  {
						console.log("Map image is: " + imgFile);
						}
					)
				}
		)
		it('the Create a new Flight Plan button is clicked',
				function() {
				element(by.buttonText('Create a new Flight Planadd')).click();
				browser.sleep(1500);
				
				// assertions
//				expect(element(by.css("svg[class='leaflet-zoom-animated']")).getAttribute(width))
//					.toBe("1559")
//				expect(element(by.css("svg[class='leaflet-zoom-animated']")).getAttribute(height))
//					.toBe("493")
						
				// logging
//				element(by.css("svg[class='leaflet-zoom-animated']"))
//					.getAttribute(width).then(
//						function(mapWidth) {
//						console.log("Map width is: " + mapWidth);
//						}
//					)
//				element(by.css("svg[class='leaflet-zoom-animated']"))
//					.getAttribute(height).then(
//						function(mapHeight) {
//						console.log("Map height is: " + mapHeight);
//						}
//					)
				}
		)
		it('When the main panel is clicked', 
				function() {
				}
		)
		it('Then the first flight plan point is inserted to the clicked location',
				function() {
				}
		)
		}
)
		
describe('Successful flight plan web app launch',
		function() {
		it('Given the web application is launched',
				function() {
				browser.get('https://stupendous-birth.surge.sh');
				browser.sleep(1500);
				}
		)
		it('Then the elements of the initial web page are loaded',
				function() {
		
				// assertions
				expect(element(by.css("h2[class='md-toolbar-item md-breadcrumb md-headline']")).getText())
					.toBe("Drone Flight Planner")
				expect(element(by.buttonText('Create a new Flight Planadd')).getText())
					.toBe("CREATE A NEW FLIGHT PLANadd")
				mapImg = element(by.css("img[src='./assets/screen-shot.png']"))
				expect(mapImg.isPresent()).toBe(true)

				// logging
				element(by.css("h2[class='md-toolbar-item md-breadcrumb md-headline']"))
					.getText().then(
						function(titleText) {
						console.log("Title text is: " + titleText);
						}
					)
				element(by.buttonText('Create a new Flight Planadd'))
					.getText().then(
						function(buttonText) {
						console.log("Button text is: " + buttonText);
						}
					)
				element(by.css("img[src='./assets/screen-shot.png']"))
					.getText().then(
						function(imgFile)  {
						console.log("Map image is: " + imgFile);
						}
					)
				}
		)
		}
)