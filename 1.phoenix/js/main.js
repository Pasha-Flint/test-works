$(document).ready(function(){	
	
	$('.slider').slick({
		dots: true,
		arrows: false,
	});

	$('.port-slider').slick({
		dots: true,
		arrows: false,
	});

	var currentTime = new Date();
	var currentHours = currentTime.getHours() * 3600;
	var currentMinutes = currentTime.getMinutes() * 60;
	var currentSeconds = currentTime.getSeconds();

	var clock = [];
	var i = 0;

	$('.ctdn').each(function(){
		clock[i] = $(this).FlipClock({
			clockFace: 'HourlyCounter',
			autoStart: true,
			countdown: true
		});
		i++;
	});

	for(var j = 0; j < $('.ctdn').length; j++){

		clock[j].setTime(86399 - (currentHours + currentMinutes + currentSeconds));
		clock[j].start();
	};

});