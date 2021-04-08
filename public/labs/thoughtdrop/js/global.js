$(function(){
    $('#tlemail').data('holder',$('#tlemail').attr('placeholder'));

    $('#tlemail').focusin(function(){
        $(this).attr('placeholder','');
    });
    $('#tlemail').focusout(function(){
        $(this).attr('placeholder',$(this).data('holder'));
    });
});


// QUOTE ROTATOR
$(document).ready(function() {
  // cache quote selector in variable
  var quotes = $('.quotes');

  /*
    cache current selector
    create variables to hold current index and next index
    if next index is greater or equal to the total number of quotes, set it to 0
    fade in the next selected quote
    fade out the current selected quote
  */
  function fade() {
    var current = $('.current');
    var currentIndex = quotes.index(current),
      nextIndex = currentIndex + 1;

    if (nextIndex >= quotes.length) {
      nextIndex = 0;
    }

    var next = quotes.eq(nextIndex);

    next.stop().fadeIn(1500, function() {
      $(this).addClass('current');
    });

    current.stop().fadeOut(1500, function() {
      $(this).removeClass('current');
      _startProgress();
      setTimeout(fade, 8000);
    });
  }

  /*
    function to animate progress bar
    select progress bar and remove inline styles
    animate over 8 seconds to fill width to 100% of container
  */
  function _startProgress(){
    $(".progress").removeAttr('style');
    $(".progress").animate({
      width:"100%",
    } , 8000);
  }

  // Start the progress bar (runs for 8 seconds)
  _startProgress();
  // Call the rotator after waiting 8 seconds (to show the initial quote)
  setTimeout(fade, 8000);
});