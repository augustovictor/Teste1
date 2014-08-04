// #################### Vars ####################

var banners = document.getElementsByClassName("item");

var items = [].slice.call(banners);

var controllersList =  document.getElementsByClassName("control-item");

var controllers = [].slice.call(controllersList);

var currentBanner = 0;

var currentControll = 0;

var myVar = setInterval(function(){changeBannerPic()},10000);



// #################### Functions ####################

// Call functions
items[currentBanner].className = items[currentBanner].className + ' active-banner-pic';
controllers[currentControll].className = controllers[currentControll].className + ' activeControll';

mapBanners();
mapControllers();


// Define functions

function changeBannerPic() {
	currentBanner++;
	currentControll++;

	// Last banner
	if (currentBanner == items.length) {
		currentBanner = 0;
		currentControll = 0;
	}


	// Resets all banner items to not active
	for(var i = 0; i < items.length; i++) items[i].className = 'item';

	// Resets all controller items to not active
	for(var i = 0; i < controllers.length; i++) controllers[i].className = 'control-item';

	// Displays banner of the turn
	items[currentBanner].className = items[currentBanner].className + ' active-banner-pic';
	controllers[currentControll].className = controllers[currentControll].className + ' activeControll';

}

function mapBanners() {
	for(var i = 0; i < items.length; i++) items[i].id = 'item' + i;
}

function mapControllers() {
	for(var i = 0; i < items.length; i++) {
		controllers[i].id = items[i].id;
		
		// Changes banner when controller clicked
		controllers[i].addEventListener('click', function() { 

			// Removes 'item' from id string
			activeController = this.id.replace(/item/, '');

			currentControll = activeController;
			currentBanner = activeController;

			// Resets all banner items to not active
			for(var i = 0; i < items.length; i++) items[i].className = 'item';

			// Resets all controller items to not active
			for(var i = 0; i < controllers.length; i++) controllers[i].className = 'control-item';

			// Displays right banner and selects right controller
			items[activeController].className = items[activeController].className + ' active-banner-pic';
			controllers[activeController].className = controllers[activeController].className + ' activeControll';

		});
	}
}

