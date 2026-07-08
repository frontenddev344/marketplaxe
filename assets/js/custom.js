function openNav() {
  document.getElementById("mySidenavs").classList.add("open");
}

function closeNav() {
  document.getElementById("mySidenavs").classList.remove("open");
}

//  header sticky js start  
const header = document.querySelector(".main-header");
const toggleClass = "is-sticky";

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll > 40) {
    header.classList.add(toggleClass);
  } else {
    header.classList.remove(toggleClass);
  }
});
//  header sticky js end

$('.responsive').slick({
  dots: false,
  infinite: true,
  arrow: true,
  speed: 300,
  autoplay: true,
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
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }

  ]
});


document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("newsletterForm");
    const email = document.getElementById("email");
    const error = document.getElementById("emailError");

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        error.style.display = "none";

        const emailValue = email.value.trim();

        if (emailValue === "") {
            error.textContent = "Email is required.";
            error.style.display = "block";
            return;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(emailValue)) {
            error.textContent = "Please enter a valid email address.";
            error.style.display = "block";
            return;
        }

        form.reset();

    });

});