

$(document).on('ready', function() {
      $(".vertical-center-4").slick({
        dots: true,
        vertical: true,
        centerMode: true,
        slidesToShow: 4,
        slidesToScroll: 2
      });
      $(".vertical-center-3").slick({
        dots: true,
        vertical: true,
        centerMode: true,
        slidesToShow: 3,
        slidesToScroll: 3
      });
      $(".vertical-center-2").slick({
        dots: true,
        vertical: true,
        centerMode: true,
        slidesToShow: 2,
        slidesToScroll: 2
      });
      $(".vertical-center").slick({
        dots: true,
        vertical: true,
        centerMode: true,
      });
      $(".vertical").slick({
        dots: true,
        vertical: true,
        slidesToShow: 3,
        slidesToScroll: 3
      });
      $(".regular").slick({
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3
      });
      $(".center").slick({
        dots: true,
        infinite: true,
        centerMode: true,
        slidesToShow: 5,
        slidesToScroll: 3
      });
      $(".variable").slick({
        dots: true,
        infinite: true,
        variableWidth: true
      });
      $(".lazy").slick({
        lazyLoad: 'ondemand', // ondemand progressive anticipated
        infinite: true
      });
    });










/*let slidov = 3;



$('.slider__turn-next').click(function () {
	slidov-=1;
	actuall_ml = $('.slider').css('margin-left')
	if (slidov== 0) {
		slidov=3
		$('.slider').css('margin-left', '0vw')
	}
	else {
	$('.slider').addClass('slider__change-next')
	$('.slider').css('margin-left', 'calc(' + actuall_ml + ' - 100vw)')
}
})

$('.slider__turn-prev').click(function () {
	slidov+=1;
	actuall_ml = $('.slider').css('margin-left')
	if (slidov==4){
	slidov=3;

	$('.slider').css('margin-left', '200vw')
	}
	else{
		$('.slider').addClass('slider__change-next')
		$('.slider').css('margin-left', 'calc(' + actuall_ml + ' + 100vw)')
	}
	
	
})*/