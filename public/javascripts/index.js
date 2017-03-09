$(document).ready((e) => {
  $('.diff-row-cover').each( (index, el) => {
    $(el).click((e) => {
      $(el).hide();
    });
  });
});
