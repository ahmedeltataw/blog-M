
$(document).ready(function () {
  
  // 
  // aos
  AOS.init();
  // swiper for LatestArticles
  var swiper = new Swiper(".LatestArticlesSwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    autoplay: true,
    autoplaySpeed: 2500,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      576: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
  // scrollTo div or section
  $(".contentCateLink li").click(function () {
    $('html, body').animate({
      scrollTop: $(('#') + $(this).data("content")).offset().top - 70
    }, 100);
  })
  // form opinion
  // yes
  $('#yes').click(function () {
    $('.yes').animate({
      right: 0
    },200)
  })
  $('.CloseForm').click(function () {
    $('.yes').animate({
      right: '-200%'
    },200)
  })
  // no
  // form opinion
  $('#no').click(function () {
    $('.no').animate({
      right: 0
    },200)
  })
  $('.CloseFormN').click(function () {
    $('.no').animate({
      right: '-200%'
    },200)
  })
  // AboutSwiper
  var swiper = new Swiper(".AboutSwiper", {
    spaceBetween: 0,
    loop: true,
    autoplay: true,
    autoplaySpeed: 2500,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
  // 
  $('#readBook').click(function () {
    $('.bookRead').addClass("active")
  })
  $("#closeBook").click(function(){
    $('.bookRead').removeClass("active")
  })
  // rate
  
  // filter
  function filter(){
    $(".filterComments li").click(function(){
    $(this).addClass("active").siblings().removeClass("active");
    $('#' + $(this).data("comment")).fadeIn().siblings().fadeOut();
  })
  }
  filter();
  // like comment
  function like() {
    $(".like i").click(function(){
      $(this).toggleClass("active");
      var numberLike = 0;
      if ($(this).hasClass("active")) {
        numberLike++
        
        $(".number_like").val(numberLike += parseInt($(".number_like").val())) 
        
      } else{
        numberLike --
        $(".number_like").val(numberLike += parseInt($(".number_like").val())) 
      }
      if(numberLike < 1){
        $(".number_like").val(0) 
      }
    })
  }
  like();
  // 


})
// 

// var animation = bodymovin.loadAnimation({

//   container: document.querySelector('.eyeAnimation'),

//   path: 'Comp 1.json',

//   renderer: 'svg',

//   loop: true,



//   autoplay: true,
//   name: "Demo Animation", 

// });      
// LottieInteractivity.create({
//   // mode: 'scroll',
//   player: '.eyeAnimation',
//   autoplay: true,
//   loop: true,
//   renderer: 'svg',

  
// });
