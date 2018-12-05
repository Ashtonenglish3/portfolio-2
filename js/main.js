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


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}



