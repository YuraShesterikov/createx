$(function () {

  var mixer = mixitup('.directions__list');

  $('.directions__filter-btn').on('click', function () {
    $('.directions__filter-btn').removeClass('directions__filter-btn--active')
    $(this).addClass('directions__filter-btn--active');
  })

  $('.team__slider').slick({
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 4,
    draggable: false,
    appendArrows: $('.team__arrows'),
  })
  $('.team__arrow-prev').on('click', function (e) {
    e.preventDefault()
    $('.team__slider').slick('slickPrev')
  })
  $('.team__arrow-next').on('click', function (e) {
    e.preventDefault()
    $('.team__slider').slick('slickNext')
  })

  $('.testimonials__slider').slick({
    arrows: false,
    dots: true,
    appendDots: ('.testimonials__dots'),
  })
  $('.testimonials__arrow-prev').on('click', function (e) {
    e.preventDefault()
    $('.testimonials__slider').slick('slickPrev')
  })
  $('.testimonials__arrow-next').on('click', function (e) {
    e.preventDefault()
    $('.testimonials__slider').slick('slickNext')
  })

  $('.program__acc-link').on('click', function (e) {
    e.preventDefault()
    if ($(this).hasClass('program__acc-link--active')) {
      $(this).removeClass('program__acc-link--active')
      $(this).children('.program__acc-text').slideToggle()
    } else {
      $('.program__acc-link').removeClass('program__acc-link--active')
      $('.program__acc-text').slideUp()
      $(this).toggleClass('program__acc-link--active')
      $(this).children('.program__acc-text').slideToggle()
    }
  })


  $(".header__nav-list a, .header__button, .footer__go-top").on("click", function (event) {
    event.preventDefault()
    var id = $(this).attr('href'),
      top = $(id).offset().top - 200
    $('body,html').animate({ scrollTop: top }, 700)
  });

});