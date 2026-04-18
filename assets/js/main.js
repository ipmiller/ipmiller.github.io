(function($) {

	var	$window = $(window),
		$body = $('body');

	// Copyright year.
		var $year = document.getElementById('copyright-year');
		if ($year) $year.textContent = new Date().getFullYear();

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

})(jQuery);