// Define a new module for our app. The array holds the names of dependencies if any.
var app = angular.module("baseballTerms", []);

$(document).ready(function() {
  $('.search-box').click(function() {
    var $value = $(this).value;

    if ( $value !== '' ) {
      $(this).attr('placeholder', '');
    }
  });
});