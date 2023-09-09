$(document).ready(function(){
  $('.slider').slick({
    dots: false,
infinite: true,
speed: 300,
slidesToShow: 4,
slidesToScroll: 4,
centerMode:true,
autoplay:true,
speed:3000,
autoplaySpeed:3000,
responsive: [
{
  breakpoint: 1024,
  settings: {
    slidesToShow: 3,
    slidesToScroll: 3,
    infinite: true,
    dots: false
  }
},
{
  breakpoint: 600,
  settings: {
    slidesToShow: 2,
    slidesToScroll: 2
  }
},
{
  breakpoint: 480,
  settings: {
    slidesToShow: 1,
    slidesToScroll: 1
  }
}

]
  });
});