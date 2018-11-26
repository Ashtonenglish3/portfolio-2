$(document).ready(function(){
  $slides = $('.slides');
  $slides.bind('contentchanged', function(){
    animate($slides);
  });
  animate($slides);
});

function animate($slides){
  var slidesLength = $slides.find('li').length;
  if(slidesLength>3){
    $slides.find('li:nth-last-child(-n+3)').clone().prependTo($slides);
    $slides.addClass('animate');
    $slides.css('animation-duration', slidesLength*2+'s');
  }
}
$(document).ready(function() {
    $('#myCarousel').carousel({
    interval: 1000,
      wrap: false
    })

    $('#myCarousel').on('slid.bs.carousel', function() {
        //alert("slid");
    });


  $('#myCarousel').on('slid.bs.carousel', '', function() {
      var $this = $(this);

      $this.children('.carousel-control').show();

      if($('.carousel-inner .item:first').hasClass('active')) {
        $this.children('.left.carousel-control').hide();
      } else if($('.carousel-inner .item:last').hasClass('active')) {
        $this.children('.right.carousel-control').hide();
      }

    }); 

});

