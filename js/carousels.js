$(function(){
  // vars for testimonials carousel
  var $txtcarousel = $('#team-list');
  var $teamcarousel = $('#team-list2');
  var txtcount = $txtcarousel.children().length;
  var wrapwidth = (txtcount * 415) + 415; // 400px width for each team item
  $txtcarousel.css('width',wrapwidth);
  var animtime = 750; // milliseconds for clients carousel
 
  // prev & next btns for testimonials
  $('#prv-team').on('click', function(){
    var $last = $('#team-list li:last');
    $last.remove().css({ 'margin-left': '-415px' });
    $('#team-list li:first').before($last);
    $last.animate({ 'margin-left': '0px' }, animtime); 
  });
  
  $('#nxt-team').on('click', function(){
    var $first = $('#team-list li:first');
    $first.animate({ 'margin-left': '-415px' }, animtime, function() {
      $first.remove().css({ 'margin-left': '0px' });
      $('#team-list li:last').after($first);
    });  
  });
  $('#prv-team2').on('click', function(){
    var $last = $('#team-list2 li:last');
    $last.remove().css({ 'margin-left': '-415px' });
    $('#team-list2 li:first').before($last);
    $last.animate({ 'margin-left': '0px' }, animtime); 
  });
  
  $('#nxt-team2').on('click', function(){
    var $first = $('#team-list2 li:first');
    $first.animate({ 'margin-left': '-415px' }, animtime, function() {
      $first.remove().css({ 'margin-left': '0px' });
      $('#team-list2 li:last').after($first);
    });  
  });

  // vars for clients list carousel
  // http://stackoverflow.com/questions/6759494/jquery-function-definition-in-a-carousel-script
  var $clientcarousel = $('#clients-list');
  var clients = $clientcarousel.children().length;
  var clientwidth = (clients * 140); // 140px width for each client item 
  $clientcarousel.css('width',clientwidth);
  
  var rotating = true;
  var clientspeed = 1800;
  var seeclients = setInterval(rotateClients, clientspeed);
  
  $(document).on({
    mouseenter: function(){
      rotating = false; // turn off rotation when hovering
    },
    mouseleave: function(){
      rotating = true;
    }
  }, '#clients');
  
  function rotateClients() {
    if(rotating != false) {
      var $first = $('#clients-list li:first');
      $first.animate({ 'margin-left': '-140px' }, 600, function() {
        $first.remove().css({ 'margin-left': '0px' });
        $('#clients-list li:last').after($first);
      });
    }
  }
});