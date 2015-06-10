var showProject = function(p) {
  var positions;

  // set projects container height
  $('.projects').css({
    height: $('.projects').height()
  });

  positions = [];
  $('.project').each(function(i, el) {
    positions.push($(el).parent().position());
  });

  // hide projects elements
  $('.project').each(function(i, el) {
    $(el).parent().css({
      left: positions[i].left,
      position: 'absolute',
      top: positions[i].top
    });
    $(el).velocity('fadeOut', { delay: 0 + (125 * i), duration: 500 });
  });

  // show detail container
};

$(window).ready(function() {

  $('.project img').on('click', function() {
    showProject($(this));
  });

});