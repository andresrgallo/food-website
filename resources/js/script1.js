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
      offset: '10%'
  })

});
