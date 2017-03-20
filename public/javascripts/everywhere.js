$(document).ready((e) => {
  const footer = $('footer');

  console.log($('body').height() - footer.height() - $('.content-wrapper').height());

  if (footer) {
    footer.css('margin-top', //'0px');
    $('body').height() - footer.height() - $('.content-wrapper').height()+ 20 + 'px');
  }
  else {
    console.log('Hello World!');
  }

});
