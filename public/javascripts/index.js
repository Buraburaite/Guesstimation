$(document).ready((e) => {
  //For each row of content
  $('.diff-row').each( (index, thisRowEl) => {
    //Save it's 'cover' in a variable
    const cover = $(thisRowEl).next();

    //When the cover is clicked
    cover.click((e) => {

      //Reveal all covers
      $('.diff-row-cover').each( (index, coverEl) => {
        $(coverEl).show();
      });

      //Hide all contents
      $('.diff-row').each( (index, rowEl) => {
        $(rowEl).hide();
      });

      //Reveal the current diff-row
      $(thisRowEl).show();

      //Then hide the current cover
      cover.hide();
    });
  });
});
