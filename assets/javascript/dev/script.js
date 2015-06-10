var showProject = function(p) {
  var delay = 0;

  $('.project').each(function(i, el) {
    $(el).velocity('fadeOut', { delay: delay + (150 * i), duration: 500 });
  });

  console.log('changed');
};

$(window).ready(function() {

  $('.project img').on('click', function() {
    showProject($(this));
  });

});