var stickyNav = new Waypoint.Sticky({
  element: $('.site-nav')[0],
	//direction: 'down right',
	stuckClass: 'stuck',
	wrapper: false
});

var stickyHeader = new Waypoint.Sticky({
  element: $('.site-header')[0],
	//direction: 'down right',
	stuckClass: 'stuck',
	wrapper: false
});

/* Scroll Highlights and Actives */
$(function() {
  var sections = $('section');
  var navigation_links = $('nav li:not(:last-child) a');
  var font_demo = $('.font-demo');
  var allchars = font_demo.find('.allchars');
  var descriptions = $('.section-description');

  sections.waypoint({
    handler: function(direction) {

      var active_section;
      active_section = this.element;

      if (direction === 'up') {
        active_section = this.previous().element;
      }

      active_id = active_section.id;

      var active_link = $('nav a[href="#' + active_id + '"]');

      navigation_links.parent().removeClass('selected');
      active_link.parent().toggleClass('selected');

      sections.removeClass('current');
      $('#' + active_id).addClass('current');

      //window.location.hash = active_id;

      $('.site-header h1').html(function() {
        var name = $('#' + active_id).data('title');
        return name
      })
    },
      //offset: 200
  });


  navigation_links.on('click', function(event) {
    event.preventDefault();
    $.scrollTo(
      $(this).attr("href"),
      {
        duration: 500,
        //offset: { 'left':0, 'top':-0.15*$(window).height() }
      }
    );
  });

  $('.type-nav a').on('click', function(event) {
    event.preventDefault();
    $.scrollTo(
      $(this).attr("href"),
      {
        duration: 500,
        offset: { 'top': -100 }
      }
    );
  });


  WebFontConfig = {
    google: { families: [ 'Open+Sans:400,300,300italic,400italic,600,600italic,700,700italic,800,800italic:latin',
    'Crimson+Text:400,300,300italic,400italic,600,600italic,700,700italic,800,800italic:latin', 'Roboto:400,100,100italic,300,300italic,400italic,500,500italic,700,900,700italic,900italic:latin', 'Montserrat:400,700:latin', 'Indie+Flower::latin'] }
  };

  /* Webfont Grab */

  (function() {
    var wf = document.createElement('script');
    wf.src = 'https://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
    wf.type = 'text/javascript';
    wf.async = 'true';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(wf, s);
  })();

  allchars.append($('<p>').text('abcdefghijklmnopqrstuvwxyz'));
  allchars.append($('<p>').text('ABCDEFGHIJKLMNOPQRSTUVWXYZ'));
  allchars.append($('<p>').text('0123456789'));
  for (var i = 100; i <= 900; i+=100) {
  	var line = $('<p>').text('Font weight ' + i).css('font-weight', i);
  	var weights = font_demo.find('.weights');
  	weights.append(line);
  	weights.append(line.clone().text('Font weight ' + i + ' italic').css('font-style', 'italic'));
  }
});

function getQueryVariable(query,variable){
  var vars = query.split('?')[1].split('&');
  for (var i=0;i<vars.length;i++) {
    var pair = vars[i].split("=");
    if(pair[0] == variable){return pair[1];}
  }
  return(false);
}

function addGFont(fontname){
  if(fontname != null){
    var cssEl = $('link[href*="fonts.googleapis.com"]');
    var cssUrl = cssEl.attr('href');
    var ogFam = getQueryVariable(cssUrl,'family');
    var formattedFam = decodeURI(ogFam);
    var newFam = encodeURI(formattedFam + "|" + fontname.replace(/\W/g,'+'));
    cssEl.attr('href',cssUrl.replace(ogFam,newFam));
  }
}


$(document).ready(function() {
	//Color swatch section
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
	//Font demo section
	$('.font-demo h2').on('click',function(event) {
		$(this).hide();
		$(this).siblings('input, span').show().focus();
	});
	$('.font-demo input').on('change',function(event) {
		$(this).parents('.font-demo').css('font-family', $(this).val());
		$(this).hide();
		$(this).siblings('h2').text($(this).val()).show();
	});
  $('.font-demo span').on('click',function(event) {
    addGFont($(this).siblings('input').val());
    $(this).hide();
  });
  //Button demo section
  $('.button-demo').hover(function() {
    $(this).find('.normal').hide();
    $(this).find('.hover').show();
  }, function() {
    $(this).find('.normal').show();
    $(this).find('.hover').hide();
  });
});
