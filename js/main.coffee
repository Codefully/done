---
---

jQuery ($) ->

  $(document).ready ->

	  $root = $("html,body")
	  if location.hash
	    callback = ->
	      window.scrollTo(0,0)
	    setTimeout callback, 10
	    $target = $(location.hash)
	    if $target.length
	      callback = ->
        	$root.animate { scrollTop: $target.offset().top - 100 }, 100
	      setTimeout callback, 300
      return false

		$slider = $('#main-slider')
		if $slider.length

	    time = 7 # time in seconds
	    $progressBar = undefined
	    $bar = undefined
	    $elem = undefined
	    isPause = undefined
	    tick = undefined
	    percentTime = undefined

	    # Init progressBar where elem is $("#owl-demo")
	    progressBar = (elem) ->
	      $elem = elem
	      # build progress bar elements
	      buildProgressBar()
	      # start counting
	      start()
	      return

	    # Create div#progressBar and div#bar then append to $(".owl-carousel")
	    buildProgressBar = ->
	      $progressBar = $('<div>', id: 'progressBar')
	      $bar = $('<div>', id: 'bar')
	      $progressBar.append($bar).appendTo $elem
	      return

	    # Init the carousel
	    start = ->
	      # reset timer
	      percentTime = 0
	      isPause = false
	      # run interval every 0.01 second
	      tick = setInterval(interval, 10)
	      return

	    interval = ->
	      if isPause == false
	        percentTime += 1 / time
	        $bar.css width: percentTime + '%'
	        #if percentTime is equal or greater than 100
	        if percentTime >= 100
	          #slide to next item
	          $elem.trigger 'owl.next'
	      return

	    # pause while dragging
	    pauseOnDragging = ->
	      isPause = true
	      return

	    # moved callback
	    moved = ->
	      #clear interval
	      clearTimeout tick
	      #start again
	      start()
	      return

	    $slider.find('.owl-carousel').owlCarousel
	      slideSpeed: 500
	      paginationSpeed: 500
	      singleItem: true
	      navigation: true
	      navigationText: [
	        '<i class=\'fa fa-angle-left\'></i>'
	        '<i class=\'fa fa-angle-right\'></i>'
	      ]
	      afterInit: progressBar
	      afterMove: moved
	      startDragging: pauseOnDragging
	      transitionStyle: 'fadeUp'

	  # https://css-tricks.com/snippets/jquery/smooth-scrolling/
	  $("a[href*=#]:not([href=#])",".home").click ->
	    $root = $("html,body")
	    $target = $(@hash)
	    if $target.length
	      $root.animate { scrollTop: $target.offset().top - 100 }, 1000, -> location.hash = $target.attr "id"
	    return false

    return

  # Initiate WOW JS
  (new WOW).init()

  # smoothScroll
  smoothScroll.init()

  # Google Map
	$map = $('#google-map')
	if $map.length
	  latitude = $map.data('latitude')
	  longitude = $map.data('longitude')

	  initialize_map = ->
	    myLatlng = new (google.maps.LatLng)(latitude, longitude)
	    mapOptions =
	      zoom: 14
	      scrollwheel: false
	      center: myLatlng
	    map = new (google.maps.Map)(document.getElementById('google-map'), mapOptions)
	    marker = new (google.maps.Marker)(
	      position: myLatlng
	      map: map
			)
	    return

  google.maps.event.addDomListener window, 'load', initialize_map
