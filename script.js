//copy menu for mobile
function copyMenu() {
    //copy inside .dpt-cat to .departmens
    var dptCategory = document.querySelector('.dpt-cat');
    var dptPlace = document.querySelector('.departments');
    dptPlace.innerHTML = dptCategory.innerHTML;

    //copy inside nav to nav
    var mainNav = document.querySelector('.header-nav nav');
    var navPlace = document.querySelector('.off-canvas nav')
    navPlace.innerHTML = mainNav.innerHTML;

    //copy .header-top .wrapper to .thetop-nav
    var topNav = document.querySelector('.header-top .wrapper');
    var topPlace = document.querySelector('.off-canvas .thetop-nav');
    topPlace.innerHTML = topNav.innerHTML;
}
copyMenu();

//show mobail menu
const menuButton = document.querySelector('.trigger'),
    closeButton = document.querySelector('.t-close'),
    addclass = document.querySelector('.site');
menuButton.addEventListener('click', function(){
    addclass.classList.toggle('showmenu')
})
closeButton.addEventListener('click', function(){
    addclass.classList.remove('showmenu')
})


//show sub menu on mobile
const submenu = document.querySelectorAll('.has-child .icon-small');
submenu.forEach((menu) => menu.addEventListener('click', toggle));

function toggle(e) {
    e.preventDefault();
    submenu.forEach((item) => item != this ? item.closest('.has-child').classList.remove('expand') : null);
    if(this.closest('.has-child').classList != 'expand');
    this.closest('.has-child').classList.toggle('expand');
}

// slider
const swiper = new Swiper('.swiper', {
    loop: true,
  
    pagination: {
      el: '.swiper-pagination',
    },
});


  (function(){

    let moo = document.getElementsByClassName('moo');
    for(let i = 0; i < moo.length; i++){
      let bubu   = moo[i].getElementsByClassName('bubu');
      let toggle = moo[i].getElementsByClassName('toggle-1');
      toggle[0].addEventListener('click', function(){
        for(let u = 1; u < bubu.length; u++){
          bubu[u].classList.toggle('show');
        }
        /* Это дело ниже называется Тернарный Оператор (можете искать статьи) */
        this.innerText = ( this.innerText == 'Ещё...' ) ? ('Скрыть') : ( 'Ещё...' );
      });
    }
    
    })();


// Show search
const searchButton = document.querySelector('.t-search'),
      tClose = document.querySelector('.search-close'),
      showClass = document.querySelector('.site');
searchButton.addEventListener('click', function() {
    showClass.classList.toggle('showsearch')
})
tClose.addEventListener('click', function() {
  showClass.classList.remove('showsearch')
})



// show dpt menu
const dptButton = document.querySelector('.dpt-cat .dpt-trigger'),
      dptClass = document.querySelector('.site');
dptButton.addEventListener('click', function(){
  dptClass.classList.toggle('showdpt')
})

// product image slider
var productThumb = new Swiper ('.small-image', {
  loop: true,
  spaceBetween: 10,
  slidesPerView: 3,
  freeMode: true,
  watchSlidesProgress: true,
  breackpoints: {
    481: {
      spaceBetween: 32,
    }
  }
});
var productBig = new Swiper ('.big-image', {
  loop: true,
  autoHeight: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  thumbs: {
    swiper: productThumb,
  }
})

// stock products bar width percentage
var stocks = document.querySelectorAll('.products .stock');
for (let x = 0; x < stocks.length; x++){
  let stock = stocks[x].dataset.stock,
  available = stocks[x].querySelector('.qty-available').innerHTML,
  sold = stocks[x].querySelector('.qty-sold').innerHTML,
  percent = sold*100/stock;

  stocks[x].querySelector('.available').style.width = percent + '%';
}

//show cart on click
const divtoShow = '.mini-cart';
const divPopup = document.querySelector(divtoShow);
const divTrigger = document.querySelector('.cart-trigger');

divTrigger.addEventListener('click', () => {
  setTimeout(() => {
    if(!divPopup.classList.contains('show')) {
      divPopup.classList.add('show');
    }
  }, 250 )
})

//close by click outside
document.addEventListener('click', (e) => {
  const isClose = e.target.closest(divtoShow);
  if(!isClose && divPopup.classList.contains('show')) {
    divPopup.classList.remove('show')
  }
})

// // show modal on load
// window.onload = function () {
//   document.querySelector('.site').classList.toggle('showmodal')
// }
// document.querySelector('.modalclose').addEventListener('click', function() {
//   document.querySelector('.site').classList.remove('showmodal')
// })

