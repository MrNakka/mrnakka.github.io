$(function () {
  // 
  $('.js-jail').hide();
  $('.js-confiscation').hide();
  $('.js-select').on('change', function () {
    $('.js-jail').hide();
    $('.js-confiscation').hide();
    var _sum = 0;
    $('.js-select').each(function () {
      var _select = $(this).val();
      var _val = Number(_select);
      // console.log(_val)
      _sum += _val;
    })
    // console.log('合計：' + _sum);
    $('.js-total').val(_sum);
    // 
    if (_sum >= 300000) {
      $('.js-jail').show();
    }
    // 
    var _text = $(this).children(':selected').text();
    // console.log(_text)
    if (_text == '詐欺罪' || _text == '窃盗罪' || _text == 'プレイヤー殺人及び未遂' || _text == 'テロ行為' || _text == '収賄/汚職罪') {
      $('.js-jail').show();
    }
    if (_text == 'テロ行為' || _text == '収賄/汚職罪' || _text == 'オイルリグ強盗') {
      $('.js-confiscation').show();
    }
  });
  // 
  $('.js-copy').on('click', function () {
    var _data = $('.js-total').val();
    navigator.clipboard.writeText(_data);
    alert('コピーしました');
  })
  // 
  $('.js-reset').on('click', function () {
    $('.js-select').prop('selectedIndex', 0);
    $('.js-total').val('');
    $('.js-jail').hide();
    $('.js-confiscation').hide();
  })
});
