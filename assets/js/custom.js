function openNav() {
  document.getElementById("mySidenavs").classList.add("open");
}

function closeNav() {
  document.getElementById("mySidenavs").classList.remove("open");
}

$('.responsive').slick({
  dots: false,
  infinite: true,
  arrow:true,
  speed: 300,
  autoplay:true,
  slidesToShow: 6,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
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