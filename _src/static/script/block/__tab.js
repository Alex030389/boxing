const tabBtns = document.querySelectorAll('[data-tab-btn]');
const tabContents = document.querySelectorAll('[data-tab-content]');

const removeTabBtnsLine = () => {
  for (let i = 0; i < tabBtns.length; i++) {
    tabBtns[i].classList.remove('gallery__tab-btn--active');
  }
};

const hideTabContents = () => {
  for (let i = 0; i < tabContents.length; i++) {
    tabContents[i].classList.remove('gallery__tab-content--active');
  }
};

for(let i = 0; i < tabBtns.length; i++) {
  tabBtns[i].addEventListener('click', (e) => {

    removeTabBtnsLine();

    e.target.classList.add('gallery__tab-btn--active');

    let btnNumData = e.target.getAttribute('data-tab-btn');

    hideTabContents();

    tabContents[btnNumData].classList.add('gallery__tab-content--active');
    
  });
};