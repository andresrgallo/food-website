$( document ).ready(function() {
 var waypoints = $('.js--features').waypoint(function(direction) {
    if (direction == 'down') {
      $('nav').addClass('sticky');
    } else {
      $('nav').removeClass('sticky');
    }
  }, {
  offset: '10%'
}) 

 var waypoints = $('.js--wp-1').waypoint(function(direction) {
    $('.js--wp-1').addClass('animated fadeIn') 
    }, {
      offset: '50%'
  })

  var waypoints = $('.js--wp-2').waypoint(function(direction) {
    $('.js--wp-2').addClass('animated fadeInUp') 
    }, {
      offset: '50%'
  })

  var waypoints = $('.js--wp-4').waypoint(function(direction) {
    $('.js--wp-4').addClass('animated fadeIn') 
    }, {
      offset: '50%'
  })


 var waypoints = $('.js--wp-3').waypoint(function(direction) {
    $('.js--wp-3').addClass('animated bounceIn') 
    }, {
      offset: '30%'
  })
});

var mobileNavBar = document.querySelector('.mobile-nav-menu');
var navBarOptions = document.querySelector('.nav-options');
var mobileNavIcon = document.querySelector('.mobile-nav-icon');
var mobileNavX = document.querySelector('.mobile-nav-exit');
mobileNavBar.onclick = function () {
  navBarOptions.style.display = 'block';
  mobileNavIcon.style.display = 'none';
  mobileNavX.style.display = 'inline-block';

  mobileNavX.onclick = function () {
  navBarOptions.style.display = 'none';
  mobileNavIcon.style.display = 'inline-block';
  mobileNavX.style.display = 'none';  
  };
};
