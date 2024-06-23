$(document).ready(function () {
  $(".header__burger").click(function (event) {
    $(".header__burger,.nav-bar").toggleClass("active");
    $("body").toggleClass("lock");
  });
});
$(document).ready(function () {
  $(".nav").click(function (event) {
    $(".header__burger,.nav-bar").toggleClass("active");
    $("body").removeClass("lock");
  });
});
