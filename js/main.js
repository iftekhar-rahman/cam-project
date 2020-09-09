jQuery(document).ready(function($){

    


    $('.upload-wrap input[type=file]').change(function () {
		var id = $(this).attr('id');
		var newimage = new FileReader();
		newimage.readAsDataURL(this.files[0]);
		newimage.onload = function (e) {
			$('#bg').css('background-image', 'url("./img/image.png")');
			$('.uploadpreview.' + id).css('background-image', 'url(' + e.target.result + ')');
		};
		$('<span class="close-btn"><img src="./img/clear.png" alt="close">').insertAfter(this);
	});
	$(document).on('click', 'span.close-btn', function () {
		$($(this)[0].previousElementSibling.previousElementSibling).css('background-image', '');
		$(this).remove();
    });

    // const slider = $(".featured-carousel");
    $('.featured-carousel, .random-carousel-1, .random-carousel-2, .random-carousel-3').slick({
        slidesToShow: 3,
        dots:false,
        arrows: false,
        easing: 'linear',
        infinite: true,
        swipeToSlide: true
    });
   
       
    
    // var slider = tns({
    //     container: '#base',
    //     items: 3,
    //     slideBy: 'page',
    //     autoplay: true
    //   });
    

    // featured-carousel
    // $('.featured-carousel').owlCarousel({
    //     items: 3,
    //     loop: false,
    //     nav: false,
    //     dots: false,
    //     autoplay: false,
    //     margin: 20,
    // });
    // $('.random-carousel-1').owlCarousel({
    //     items: 3,
    //     loop: false,
    //     nav: false,
    //     dots: false,
    //     autoplay: false,
    //     margin: 15,
    // });
    // $('.random-carousel-2').owlCarousel({
    //     items: 3,
    //     loop: false,
    //     nav: false,
    //     dots: false,
    //     autoplay: false,
    //     margin: 15,
    // });
    // $('.random-carousel-3').owlCarousel({
    //     items: 4,
    //     loop: false,
    //     nav: false,
    //     dots: false,
    //     autoplay: false,
    //     margin: 5,
    //     autoWidth: true,
    // });
    // $('.random-carousel-4').owlCarousel({
    //     items: 3,
    //     loop: false,
    //     nav: false,
    //     dots: false,
    //     autoplay: false,
    //     margin: 15,
    // });

    

    

});