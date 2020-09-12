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
    // $('.featured-carousel, .random-carousel-1, .random-carousel-2').slick({
    //     slidesToShow: 3,
    //     dots:false,
    //     arrows: false,
    //     easing: 'linear',
    //     infinite: true,
    //     swipeToSlide: true
    // });
    // carousel js
    // $('.random-carousel-3').slick({
    //     slidesToShow: 3,
    //     dots:false,
    //     variableWidth: true,
    //     arrows: false,
    //     easing: 'linear',
    //     infinite: true,
    //     swipeToSlide: true
    // });

    // JS for range slider
    // var p = document.getElementById("rrange"),
    // res = document.getElementById("percent");

    // p.addEventListener("input", function() {
    //   res.innerHTML = p.value + "%";
    //   $('#percent').css('left', p.value * 3.7 - 15);
    //   $('.value_ident').css('width', p.value*4);
    // }, false);
    // $('.rang').on({
    //     mousedown: function () {
    //         $('#percent').addClass('active');
    //     },
    //     mouseup: function () {
    //         $('#percent').removeClass('active');
    //     }
    // });

    // Tab JS
    $('.tabs a').click(function(){
      $('.panel').hide();
      $('.tabs a.active').removeClass('active');
      $(this).addClass('active');

      var panel = $(this).attr('href');
      $(panel).fadeIn(1000);

      return false;  // prevents link action
    });  // end click 
    $('.tabs li:first a').click();

    // js for color selections
    $(".single-color-item").on("click", function(){
      $(".single-color-item").removeClass("active");
      $(this).addClass("active");
    });
    // js for redo-undo-btns
    $(".redo-undo-btns").on("click", function(){
      $(".redo-undo-btns").removeClass("active");
      $(this).addClass("active");
    });
    // js for text-alignment
    $(".single-font-alignment").on("click", function(){
      $(".single-font-alignment").removeClass("active");
      $(this).addClass("active");
    });

    // $(".font-change-btn").on("click", function(){
    //   $(".font-change, .site-wrap").removeClass("font-active");
    //   $(this).addClass("font-active");
    // });
    $(".font-change-btn").on("click", function(){
      $(".font-change, .site-wrap").toggleClass("active");
    });
    $(".site-wrap.active").on("click", function(){
      $(".font-change, .site-wrap").removeClass("active");
    });
    // $(".font-change-btn").on("click", function(){
    //   $(".font-change, .site-wrap").removeClass("active");
    // });
    // js for redo-undo-btns
    // $(".font-change-btn").on("click", function(){
    //   $(".font-change").toggleClass("active");
    // });













    

});