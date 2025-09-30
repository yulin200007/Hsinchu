

const StorySection = document.getElementById('Story');

// 取得點擊按鈕的元素
const StoryButton = document.querySelector('.Storybtn');

// 為按鈕加上點擊事件監聽器
StoryButton.addEventListener('click', (e) => {
  // 阻止預設的錨點跳轉行為
  e.preventDefault();

  // 讓頁面平滑地滾動到目標區塊
  StorySection.scrollIntoView({
    behavior: 'smooth'
  });
});

const GameplaySection = document.getElementById('Gameplay');

// 取得點擊按鈕的元素
const GameplayButton = document.querySelector('.Gameplaybtn');

// 為按鈕加上點擊事件監聽器
GameplayButton.addEventListener('click', (e) => {
  // 阻止預設的錨點跳轉行為
  e.preventDefault();

  // 讓頁面平滑地滾動到目標區塊
  GameplaySection.scrollIntoView({
    behavior: 'smooth'
  });
});

const MapSection = document.getElementById('Map');

// 取得點擊按鈕的元素
const MapButton = document.querySelector('.Mapbtn');

// 為按鈕加上點擊事件監聽器
MapButton.addEventListener('click', (e) => {
  // 阻止預設的錨點跳轉行為
  e.preventDefault();

  // 讓頁面平滑地滾動到目標區塊
  MapSection.scrollIntoView({
    behavior: 'smooth',
  });
});

const RewardsSection = document.getElementById('Rewards');

// 取得點擊按鈕的元素
const RewardsButton = document.querySelector('.Rewardsbtn');

// 為按鈕加上點擊事件監聽器
RewardsButton.addEventListener('click', (e) => {
  // 阻止預設的錨點跳轉行為
  e.preventDefault();

  // 讓頁面平滑地滾動到目標區塊
  RewardsSection.scrollIntoView({
    behavior: 'smooth'
  });
});

const CounterSection = document.getElementById('ServiceCounter');

// 取得點擊按鈕的元素
const CounterButton = document.querySelector('.Counterbtn');

// 為按鈕加上點擊事件監聽器
CounterButton.addEventListener('click', (e) => {
  // 阻止預設的錨點跳轉行為
  e.preventDefault();

  // 讓頁面平滑地滾動到目標區塊
  CounterSection.scrollIntoView({
    behavior: 'smooth'
  });
});




 const navbtn = document.querySelector('.nav__btn');
 const nivlist = document.querySelector('.nav');
 const lineset = document.querySelector('.navl__btn--lineset');
 const body = document.querySelector('body');
const navitem = document.querySelectorAll('.nav__list--item');

navbtn.addEventListener('click', function () {
  nivlist.classList.toggle('active');
  lineset.classList.toggle('is-active');
  body.classList.toggle('no-scroll');

});

navitem.forEach(item => {
  item.addEventListener('click', function () {
    nivlist.classList.remove('active')
    lineset.classList.toggle('is-active');
    body.classList.toggle('no-scroll');
  })
});



const locationset = document.querySelectorAll('.Map__postlist--itemset');

locationset.forEach(item => {
  const heart = item.querySelector('.Map__postlist--item-click');

  item.addEventListener('click', () => {
    // 檢查：當前項目是否已經是 'hadclick' 狀態？
    const wasActive = heart.classList.contains('hadclick');

    // 步驟一：清除所有項目的 'hadclick' 狀態
    locationset.forEach(otherItem => {
      const otherHeart = otherItem.querySelector('.Map__postlist--item-click');
      otherHeart.classList.remove('hadclick');
    });

    // 步驟二：如果點擊的不是原本亮的那個，就把它設為亮
    // 如果點擊的是原本亮的那個 (wasActive = true)，則不會執行這段，等於熄滅了
    if (!wasActive) {
      heart.classList.add('hadclick');
    }
  });
});

//監聽視窗大小改變的事件
$(window).on('resize', function() {

  // 取得目前的視窗寬度
  var currentWidth = $(window).width();

  if (currentWidth <= 768) {
    // 只有在手機寬度時，才執行 Slick
    //slick-initializedは初始化の際に、slick自身追加されたclass(もう初始化したよ！の意味)
    if (!$('.Gameplay__blocks').hasClass('slick-initialized')) {
      $('.Gameplay__blocks').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '.Gameplay__turnbtn--btn.back',
        nextArrow: '.Gameplay__turnbtn--btn.next'
      });
    }
  } else {
    // 只有在電腦寬度時，才移除 Slick
    if ($('.Gameplay__blocks').hasClass('slick-initialized')) {
      $('.Gameplay__blocks').slick('unslick');
    }
  }
}).resize(); // .resize() 會在頁面載入時先執行一次


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

