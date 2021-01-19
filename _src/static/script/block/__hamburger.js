const headerBtnMenu = document.querySelector('.header__btn-menu');
const headerMenu = document.querySelector('.header__menu');
const body = document.querySelector('body');

const openMobMenu = () => {
  headerMenu.classList.add('header__menu--active');
  body.classList.add('scroll-fixed');
}

const closeMobMenu = () => {
  headerMenu.classList.remove('header__menu--active');
  body.classList.remove('scroll-fixed');  
}

headerBtnMenu.addEventListener('click', () => {
  if(getComputedStyle(headerMenu).display == 'none') {
    openMobMenu();
  } else {
    closeMobMenu();
  }
});
