$(document).ready((e) => {

  const footer = $('footer');
  if (footer) {
    footer.css('margin-top', //'0px');
    $('body').height() - footer.height() - $('.content-div').height()+ 20 +'px');
  }

});
