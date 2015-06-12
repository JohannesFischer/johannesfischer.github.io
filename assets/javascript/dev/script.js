var Helper = {
  // FUTURE Y U NO make rgb method?
  getRGBA: function(selector) {
    var bg_color = $(selector).first().css('background-color');
    return /rgba?\((\d+)\s*,\s*(\d+)\s*,\s*(\d+),\s*(\d+[\.\d+]*)*\)/g.exec(bg_color).slice(1, 5);
  }
};

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
    $(el).velocity('fadeOut', { delay: 25 + (125 * i), duration: 500 });
  });

  // show detail container
};

//
// DOM ready

$(window).ready(function() {
  var link_rgba,
      nav_rgb_str;

  link_rgba = Helper.getRGBA('nav a');
  nav_rgb_str = Helper.getRGBA('nav').splice(0, 3).join(',');

  $(window).on('scroll', function() {
    var alpha,
        link_alpha,
        limit,
        scroll_top;

    limit = 200;
    scroll_top = $(window).scrollTop();

    if (scroll_top < limit) {
      alpha = (limit * scroll_top / 100) / 100; // TODO round me!
      $('nav').css({
        backgroundColor: 'rgba(' + nav_rgb_str + ',' + alpha + ')'
      });

      // start from the stylesheet value and go from there to full opacity depending on the scrolly p
      link_alpha = (limit * scroll_top / 100) / 100;// link_rgba[3] // I'm the initial value
      console.log(link_alpha);
      $('nav a').css({
        backgroundColor: 'rgba(' + link_rgba.splice(0, 3).join(',') + ',' + link_alpha + ')'
      });
    }
  });

  $('.project img').on('click', function() {
    showProject($(this));
  });

});