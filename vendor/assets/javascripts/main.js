$(document).ready(function() {
	var switchPhoto = function() {
		var current = $("#iphone img.screenshot.active");
		var next = current.next();
		if (next.is(':last-child')) next = $("#iphone img:first-child");
		next.css("z-index", 3);
		
		next.fadeIn("slow", "swing", function() {
			current.removeClass("active");
			current.css("display", "none");
			next.addClass("active");
			next.css("z-index", 1);
			setTimeout(function(){
				switchPhoto();
			}, 3000);
		});
	}
	setTimeout(function(){
		switchPhoto();
	}, 3000);
	if ($("html").hasClass("no-touch")) {
	var scrollorama = $.scrollorama({ blocks:'.scrollblock' }),
	logfirst = $('div.slide.log .scrollblock img.first'),
	logsecond = $('div.slide.log .scrollblock img.second');
	
	scrollorama
		.animate(logfirst,{ delay: -450, duration: 1000, property:'top', start:200, end: -50})
		.animate(logsecond,{ delay: -400, duration: 1200, property:'right', start: -200, end: 0 })
		.animate(logsecond,{ delay: -400, duration: 1000, property:'top', start: 100, end: 0 });
		
	scrollorama
		.animate('div.slide.share .scrollblock img.center',{ delay: -300, duration: 1000, property:'right', start:200, end: 20})
		.animate('div.slide.share .scrollblock h3.twitter',{ delay: -500, duration: 700, property:'right', start:-200, end: -20})
		.animate('div.slide.share .scrollblock h3.facebook',{ delay: -300, duration: 800, property:'right', start:-200, end: -20})
		.animate('div.slide.share .scrollblock h3.mail',{ delay: -100, duration: 900, property:'right', start:-200, end: -20});
	
	scrollorama
		.animate('div.slide.stats .scrollblock img.third', { delay: -700, duration: 600, property:'top', start:300, end: 0})
		.animate('div.slide.stats .scrollblock img.second', { delay: -400, duration: 600, property:'top', start:300, end: 0})
		.animate('div.slide.stats .scrollblock img.first', { delay: -200, duration: 600, property:'top', start:300, end: 0});
	
//	scrollorama
//		.animate('div.slide.easy .scrollblock .iphones', { delay: 100, duration: 1000, property:'rotate', end: 10});
	}
})
