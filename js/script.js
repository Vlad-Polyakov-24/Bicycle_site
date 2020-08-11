$('.wrapper').addClass('loaded');
/*BURGER*/
$('.icon-menu').click(function(event){
	$(this).toggleClass('active');
	$('.menu__body').toggleClass('active');
	$('body').toggleClass('lock');
});
/*BURGER-END*/

/*IBG*/
	function ibg(){

	$.each($('.ibg'), function(index, val) {
	if($(this).find('img').length>0){
	$(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
	}
	});
	}

	ibg();
/*IBG-END*/

/*SLIDER-END*/
if($('.slider__body').length>0){
	$('.slider__body').slick({
		dots:true,
		arrow:false,
		accessibility:false,
		sliderToShow: 1,
		autoplayslider: 3000,
		adaptiveHeight: true,
		nextArrow: '<button type="button" class="slick-next"></button>',
		prevArrow: '<button type="button" class="slick-prev"></button>',
		responsive: [{
			breakpoint: 768,
			settings: {}
		}]
	});
}
/*SLIDER-END*/