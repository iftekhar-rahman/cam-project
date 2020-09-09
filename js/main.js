jQuery(document).ready(function($){


    // image upload js for homepage
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

    // carousel js
    $('.featured-carousel, .random-carousel-1, .random-carousel-2, .random-carousel-4').slick({
        slidesToShow: 3,
        dots:false,
        arrows: false,
        easing: 'linear',
        infinite: true,
        swipeToSlide: true
    });
    // carousel js
    $('.random-carousel-3').slick({
        slidesToShow: 3,
        dots:false,
        variableWidth: true,
        arrows: false,
        easing: 'linear',
        infinite: true,
        swipeToSlide: true
    });

});