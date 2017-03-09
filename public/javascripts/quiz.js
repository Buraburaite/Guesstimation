$(document).ready((e) => {
  $('.choice-row').each( (index, el) => {
    $(el).click((e) => {

      let color = $(el).css('color');
      if (color === 'rgb(255, 255, 255)') {
        $(el).css('color', 'gray');
      } else {
        $(el).css('color', 'white');
      }
    });
  });
});
