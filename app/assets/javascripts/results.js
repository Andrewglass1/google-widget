var ready;
ready = function(){
  $('.specials-toggle').click(function(){
    var next = parseInt($('#specials-bottom').attr('data-current')) + 1;
    if(next >= parseInt($('#specials-bottom').attr('data-count'))){
      next = 0;
    };
    $('.special-title').removeClass('current');
    $('.special-details').removeClass('current');

    $('.special-title[data-index="' + next + '"]').addClass('current');
    $('.special-details[data-index="' + next + '"]').addClass('current');

    $('.special-image').removeClass('active');
    $('.special-image[data-index="' + next + '"]').addClass('active');

    $('#specials-bottom').attr('data-current', next);

    return false
  })
}

$(document).ready(ready);
$(document).on('page:load', ready);
