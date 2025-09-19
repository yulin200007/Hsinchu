 const navbtn = document.querySelector('.nav__btn');
 const nivlist = document.querySelector('.nav');
 const lineset = document.querySelector('.navl__btn--lineset');
 const body = document.querySelector('body');

 navbtn.addEventListener('click',function(){
    nivlist.classList.toggle('active');
    lineset.classList.toggle('is-active');
    body.classList.toggle('no-scroll');
  
 })
const locationset = document.querySelectorAll('.Map__postlist--itemset');
locationset.forEach(item => {

 const heart = item.querySelector('.Map__postlist--item-click');

 item.addEventListener('click',() => {
  heart.classList.toggle('hadclick');
 });
});
 $('.Gameplay__blocks').slick({

    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [
      
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          prevArrow: '.Gameplay__turnbtn--btn.back',
          nextArrow: '.Gameplay__turnbtn--btn.next'
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

$('.Map__postlist').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  centerMode: true,
  variableWidth: true,
  autoplay: true,
  autoplaySpeed: 1500,
});