var stickyNav = new Waypoint.Sticky({
  element: $('.site-nav')[0],
	direction: 'down right',
	stuckClass: 'stuck',
	wrapper: false
});

var stickyHeader = new Waypoint.Sticky({
  element: $('.site-header')[0],
	direction: 'down right',
	stuckClass: 'stuck',
	wrapper: false
});

$(document).ready(function() {
	$('.colorbox').on('click', function(event) {
		event.preventDefault();
		$(this).find('input').show().focus();
		$(this).find('span').hide();
	});
	$('.colorbox input').on('change', function(event) {
		event.preventDefault();
		$(this).siblings('.swatch').css('background-color', $(this).val());
		$(this).siblings('span').text($(this).val());
	});
	$('.colorbox input').on('blur', function(event) {
		$(this).hide();
		$(this).siblings('span').show();
	});
});