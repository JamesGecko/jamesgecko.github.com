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

var keepSectionOpen = function(e) { e.stopPropagation(); };
$('.job a').on('click', keepSectionOpen);

// Keep the section open when the user has selected text.
// http://stackoverflow.com/a/14711340/5625
$('.job').on('mousedown', function(e) {
  $(this).data('p0', { x: e.pageX, y: e.pageY });
}).on('mouseup', function(e) {
  var p0 = $(this).data('p0'),
      p1 = { x: e.pageX, y: e.pageY },
      d = Math.sqrt(Math.pow(p1.x - p0.x, 2) + Math.pow(p1.y - p0.y, 2));
  if (d < 4) {
    // Distance moved is small enough to be a click. Toggle the section.
    toggleTriangle($(this).children('.triangle'));
    var longClass = $(this).children('.long');
    longClass.slideToggle(200);
  }
});
