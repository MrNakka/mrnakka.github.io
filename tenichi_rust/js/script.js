$(function () {
  $('.test1to2').on('click', function () {
    // $('.team01').addClass('team02').css({
    //   opacity: .5
    // });
    $('.team01').addClass('team02');
    $('.team01').removeClass('team01');
    // $('.team02').fadeIn(1000);
  })

  // param for obs
  function getParam(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
      results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
  }
  var param = location.search;
  console.log(param)
  if (getParam('obs') === "true") {
    $('body').addClass('obs');
    // 5min reload
    setTimeout(function () {
      location.reload();
      console.log('reload')
    }, 300000);
  }
});