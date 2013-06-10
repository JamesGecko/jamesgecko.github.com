var closedTriangleCode = 9654;
var openTriangleCode = 9660;
var toggleTriangle = function(selector) {
  if (selector.text().charCodeAt(0) == closedTriangleCode) {
    selector.html('&#' + openTriangleCode);
  } else { //'\25BC'
    selector.html('&#' + closedTriangleCode);
  }
}

$('.short').before('<div class="triangle">&#' + closedTriangleCode + '</div>');

$('.short').on('click', function(e) {
  toggleTriangle($(this).siblings('.triangle'));
  $(this).siblings('.long').toggle();
});

$('.long').on('click', function(e) {
  toggleTriangle($(this).siblings('.triangle'));
  $(this).toggle();
});

