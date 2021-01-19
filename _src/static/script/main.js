'use strict';

// lazyLoad
const lazyLoadInstance = new LazyLoad({
	elements_selector: ".lazy"
});

// const isVisible = (elem) => { elem.offsetWidth > 0 || elem.offsetHeight > 0;

// ///////////////////////////////////// block
@@include('block/__buttons-blur.js')
@@include('block/__hamburger.js')
@@include('block/__tab.js');
@@include('block/__slider.js');
@@include('block/__modal.js');
@@include('block/__up.js');