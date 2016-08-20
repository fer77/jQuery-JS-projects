$(document).ready(function() {
  // $('.myLink').on('mouseenter', function() {
  //   //alert('You Clicked!!');
  //   $('h1').addClass('red');
  // });
  // $('.myLink').on('mouseleave', function() {
  //   $('h1').removeClass('red');
  // });
  ////////////////////////////////////////////////////////////////////////////
  // $('.myLink').click(function() {
  //   $('h1').append('<h6 class="green">Hello Everyone</h6>');
  // });
  ////////////////////////////////////////////////////////////////////////////
  $('.myLink').click(function() {
     $('h1').css('font-size', '40px');
  });
});

//.on(
//      'click', function() {})
//      'mouseenter', function() {})
//.addClass():    $('h1').addClass('.red').  Adds a class to the selected element.
//.removeClass(): $('h1').removeClass('.red').
//.fadeOut():     $('h1').fadeOut(500).  Fade animation for the selected element.
//.fadeToggle():  $('h1').fadeToggle(500).  Toggles the fade animation.
//.slideToggle(): $('h1').slideToggle(500).  Slide animation.
//.text():        $('h1').text('Hello Everyone').  Changes the selectged text.
//.html():        $('h1').html('<h6 class="green">Hello Everyone</h6>').  Adds a HTML element and all of its contents.
//.replaceWith(): $('h1').replaceWith('<h6 class="green">Hello Everyone</h6>').
//.append():      $('h1').append('<h6 class="green">Hello Everyone</h6>').  Adppends an element.
//.css():         $('h1').css('font-size', '40px').  Adds css styles
