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
    $(".single-color-item.addclass").on("click", function(){
      $(".single-color-item.addclass").removeClass("active");
      $(this).addClass("active");
    });
    $(".single-color-item.color-picker").on("click", function(){
      $(".single-color-item.addclass").removeClass("active");
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

    // JS for font selection section
    $(".font-change-btn").on("click", function(){
      $(".font-change").toggleClass("active");
    });
    $(".font-change-btn").on("click", function(){
      $(".overlay").toggleClass("active");
    });
    $(".overlay").on("click", function(){
      $(".overlay, .font-change").removeClass("active");
    });

    // JS for range slider
    var slider = document.getElementById("slider");
    slider.oninput = function() {
      $('.fill').css('width', this.value + '%');
    }
    var slider = document.getElementById("slider2");
    slider.oninput = function() {
      $('.fill2').css('width', this.value + '%');
    }
    var slider = document.getElementById("slider3");
    slider.oninput = function() {
      $('.fill3').css('width', this.value + '%');
    }

    // js for text-alignment
    $(".slider.round").on("click", function(){
      $(".color-box, .range-wrapper, .bottom-section, .font-change, .overlay, .tabs").toggleClass("disbale");
    });
    


    

});