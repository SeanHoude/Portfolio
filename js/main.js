const $nameEl = $("#name-el")
const $carouselOne = $("#carousel-one")

$(document).ready(function() {
  $nameEl.addClass("animated fadeIn")
  $carouselOne.addClass("animated slideInRight")
})

$('[data-mobile-app-filter-menu] li').click(function () {
  $(this).siblings().removeClass('is-active');
  $(this).addClass('is-active');
  let firstToHide = "#" + $(this).siblings().first().text().toLowerCase()
  let lastToHide = "#" + $(this).siblings().last().text().toLowerCase()
  let idToShow = "#" + $(this).children("a").text().toLowerCase()
  $(firstToHide).hide()
  $(lastToHide).hide()
  $(idToShow).show()
});

