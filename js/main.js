// external js: flickity.pkgd.js

$(document).ready(function () {
	var $gallery = $('.gallery').flickity({
		cellSelector: 'img',
		percentPosition: false,
		lazyload: true,
		autoPlay: true,
		wrapAround: true
	});
	var $caption = $('.caption');
	// Flickity instance
	var flkty = $gallery.data('flickity');

	$gallery.on('cellSelect', function () {
		// set image caption using img's alt
		$caption.text(flkty.selectedElement.alt)
	});
});


$('.maps').click(function () {
	$('.maps iframe').css("pointer-events", "auto");
});

console.log("Test")