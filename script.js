//  $(document).ready(function()) {}
//  	var currentIndex = 0,
//  	items = $('.container div'), 
//  	itemAmt = items.length; 

//  function cycleItems() {
//  	var item = $('.container div').eq(currentIndex);
//  	items.hide();
//  	item.css('display','inline-block');
//  }

//  var autoSlide = setInterval(function() {
//  	currentIndex +=1;
//  	if (currentIndex > itemAmt - 1) {
//  		currentIndex = 0;
//  	}
//  	cycleItems();

//  }, (3000);

//  $('next').click(function() {
//  	clearInterval(autoSlide);
//  	currentIndex += 1;
//  	if (currentIndex > itemAmt-1) {
//  		currentIndex = 0;
//  	}
//  	cycleItems();

//  });

//  $('previous').click(function() {
//  	clearInterval(autoSlide);
//  	currentIndex -= 1;
//  	if (currentIndex < 0) {
//  		currentIndex = itemAmt-1;
//  	}
//  	cycleItems();

//  });

// var $container = jQuery('.masonry-grid');
// $container.masonry({
//   columnWidth: 200px,
//   itemSelector: '.grid-item'

// });

// @media (min-width:1500px){
// 	#masonry-grid .gutter-sizer{width:4%;}
// 	#masonry-grid .grid-item{width:22%;margin-bottom:4%;}
// }

// @media (max-width:1200px){
// 	#masonry-grid .gutter-sizer{width:4%;}
// 	#masonry-grid .grid-item{width:48%;}
// }

// @media (max-width:768px){
// 	#masonry-grid .gutter-sizer{width:0%;}
// 	#masonry-grid .grid-item{width:100%;}
// }


// var offset = 250;
// var duration = 300;
// jQuery(window).scroll(function() {
// if (jQuery(this).scrollTop() > offset) {
// jQuery(‘.back-to-top’).fadeIn(duration);
// } 
// else {
// jQuery(‘.back-to-top’).fadeOut(duration);
// }
// });
 
// &nbsp;
// jQuery(‘.back-to-top’).click(function(event) {
// event.preventDefault();
// jQuery(‘html, body’).animate({scrollTop: 0}, duration);
// return false;
// })
// });