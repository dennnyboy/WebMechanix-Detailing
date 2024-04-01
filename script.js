document.addEventListener("DOMContentLoaded", function () {
  var navbarToggler = document.querySelector(".navbar-toggler");
  navbarToggler.addEventListener("click", function () {
    navbarToggler
      .querySelector(".navbar-toggler-icon")
      .classList.toggle("active");
  });
});
