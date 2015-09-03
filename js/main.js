

jQuery(function($) {

	//////////////////////////////////////////////////////////////////////////////
	//Google Map
	var latitude = $('#google-map').data('latitude');
	var longitude = $('#google-map').data('longitude');
	function initialize_map() {
		var myLatlng = new google.maps.LatLng(latitude,longitude);
		var mapOptions = {
			zoom: 14,
			scrollwheel: false,
			center: myLatlng
		};
		var map = new google.maps.Map(document.getElementById('google-map'), mapOptions);
		var marker = new google.maps.Marker({
			position: myLatlng,
			map: map
		});
	}
	google.maps.event.addDomListener(window, 'load', initialize_map);


	//////////////////////////////////////////////////////////////////////////////
	// Slider
	$(document).ready(function() {
		var time = 7; // time in seconds

		var $progressBar,
				$bar,
				$elem,
				isPause,
				tick,
				percentTime;

			//Init the carousel
			$("#main-slider").find('.owl-carousel').owlCarousel({
				slideSpeed : 500,
				paginationSpeed : 500,
				singleItem : true,
				navigation : true,
			navigationText: [
			"<i class='fa fa-angle-left'></i>",
			"<i class='fa fa-angle-right'></i>"
			],
				afterInit : progressBar,
				afterMove : moved,
				startDragging : pauseOnDragging,
				//autoHeight : true,
				transitionStyle : "fadeUp"
			});

			//Init progressBar where elem is $("#owl-demo")
			function progressBar(elem){
				$elem = elem;
				//build progress bar elements
				buildProgressBar();
				//start counting
				start();
			}

			//create div#progressBar and div#bar then append to $(".owl-carousel")
			function buildProgressBar(){
				$progressBar = $("<div>",{
					id:"progressBar"
				});
				$bar = $("<div>",{
					id:"bar"
				});
				$progressBar.append($bar).appendTo($elem);
			}

			function start() {
				//reset timer
				percentTime = 0;
				isPause = false;
				//run interval every 0.01 second
				tick = setInterval(interval, 10);
			};

			function interval() {
				if(isPause === false){
					percentTime += 1 / time;
					$bar.css({
						 width: percentTime+"%"
					 });
					//if percentTime is equal or greater than 100
					if(percentTime >= 100){
						//slide to next item
						$elem.trigger('owl.next')
					}
				}
			}

			//pause while dragging
			function pauseOnDragging(){
				isPause = true;
			}

			//moved callback
			function moved(){
				//clear interval
				clearTimeout(tick);
				//start again
				start();
			}
	});

	//////////////////////////////////////////////////////////////////////////////
	// Initiat WOW JS
	new WOW().init();

	//////////////////////////////////////////////////////////////////////////////
	// smoothScroll
	smoothScroll.init();


	//////////////////////////////////////////////////////////////////////////////
	// photoswipe
	// var pswpElement = document.querySelectorAll('.pswp')[0];

	// build items array
	// var items = [
	//     {
	//         src: 'https://placekitten.com/600/400',
	//         w: 600,
	//         h: 400
	//     },
	//     {
	//         src: 'https://placekitten.com/1200/900',
	//         w: 1200,
	//         h: 900
	//     }
	// ];

	// define options (if needed)
	// var options = {
	    // optionName: 'option value'
	    // for example:
	    // index: 0 // start at first slide
	// };

	// Initializes and opens PhotoSwipe
	// var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
	// gallery.init();

});
