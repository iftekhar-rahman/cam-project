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

    // import {tns} from './tiny-slider.js';
    // var slider = tns({
    //     container: '.my-slider',
    //     items: 1,
    //     // responsive: {
    //     //   640: {
    //     //     edgePadding: 20,
    //     //     gutter: 20,
    //     //     items: 2
    //     //   },
    //     //   700: {
    //     //     gutter: 30
    //     //   },
    //     //   900: {
    //     //     items: 3
    //     //   }
    //     // }
    //   });
    // featured-carousel
    $('.featured-carousel').owlCarousel({
        items: 3,
        loop: true,
        nav: false,
        dots: false,
        autoplay: false,
        margin: 20,
    });
    $('.random-carousel-1').owlCarousel({
        items: 3,
        loop: true,
        nav: false,
        dots: false,
        autoplay: false,
        margin: 15,
    });
    $('.random-carousel-2').owlCarousel({
        items: 3,
        loop: true,
        nav: false,
        dots: false,
        autoplay: false,
        margin: 15,
    });
    $('.random-carousel-3').owlCarousel({
        items: 4,
        loop: true,
        nav: false,
        dots: false,
        autoplay: false,
        margin: 5,
        autoWidth: true,
    });
    $('.random-carousel-4').owlCarousel({
        items: 3,
        loop: true,
        nav: false,
        dots: false,
        autoplay: false,
        margin: 15,
    });

    

    

});