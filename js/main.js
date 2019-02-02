const $projects = $("#projects")
const $carouselOne = $("#carousel-one")

$(document).ready(function() {
  // $projects.addClass("animated slideInRight")
})

$('[data-mobile-app-filter-menu] li').click(function () {
  $(this).siblings().removeClass("is-active");
  $(this).addClass('is-active');
  let firstToHide = $(this).siblings().first().text().toLowerCase()
  let lastToHide = $(this).siblings().last().text().toLowerCase()
  let idToShow = $(this).children("a").text().toLowerCase()

  let $firstToHide = $("#" + firstToHide)
  let $lastToHide = $("#" + lastToHide)
  let $idToShow = $("#" + idToShow)
  $firstToHide.removeClass().addClass("animated slideOutLeft")
  $lastToHide.removeClass().addClass("animated slideOutLeft")
  $idToShow.removeClass()
  $idToShow.show()
  $idToShow.addClass("is-active")
  // document.getElementById(firstToHide).addEventListener('animationend', function() { $firstToHide.hide() })
  // document.getElementById(lastToHide).addEventListener('animationend', function() { $lastToHide.hide() })
  $idToShow.addClass("animated slideInRight")
});

