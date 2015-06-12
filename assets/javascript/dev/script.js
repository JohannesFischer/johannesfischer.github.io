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
  var nav_color,
      rgb;

  nav_color = $('nav').css('background-color');
  rgb = /rgba?\((\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*\d+[\.\d+]*)*\)/g.exec(nav_color).slice(1, 4).join(',');

  $(window).on('scroll', function() {
    var a,
        limit,
        p,
        st;

    limit = 200;
    st = $(window).scrollTop();

    if (st < limit) {
      p = limit * st / 100;
      a = p / 100;

      $('nav').css({
        backgroundColor: 'rgba(' + rgb + ',' + a + ')'
      });
    }
  });

  $('.project img').on('click', function() {
    showProject($(this));
  });

});