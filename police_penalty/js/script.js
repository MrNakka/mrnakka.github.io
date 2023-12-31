$(function () {
  // 
  $('.js-jail').hide();
  $('.js-confiscation').hide();
  $('.js-terror').hide();
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
    // 罰金額でのプリズン判定
    if (_sum >= 1000000) {
      $('.js-jail').show();
    }
    // 
    var _text = $(this).children(':selected').text();
    // 詐欺・窃盗・ATM -> 金額低くてもプリズン
    if (_text == '詐欺罪' || _text == '窃盗罪' || _text == 'ATM強盗') {
      $('.js-jail').show();
    }
    // 殺人(未遂) -> 金額低くてもプリズン
    if (_text == 'プレイヤー殺人及び未遂' || _text == 'テロ行為' || _text == '収賄/汚職罪') {
      $('.js-jail').show();
    }
    // 所持金没収とセット
    if (_text == 'テロ行為' || _text == '収賄/汚職罪') {
      $('.js-jail').show();
    }
    // 所持資産没収
    if (_text == 'テロ行為' || _text == '収賄/汚職罪' || _text == 'オイルリグ強盗') {
      $('.js-confiscation').show();
    }
    // 所持資産没収
    if (_text == '重テロ行為') {
      $('.js-terror').show();
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
  // 犯罪セット
  $('.js-set-store').on('click', function () {
    $('.js-select').eq(0).find('option').filter(function (index) {
      return $(this).text() === 'コンビニ強盗罪';
    }).prop('selected', true);
    $('.js-select').eq(1).find('option').filter(function (index) {
      return $(this).text() === '公務執行妨害';
    }).prop('selected', true);
    $('.js-select').eq(2).find('option').filter(function (index) {
      return $(this).text() === '公務員殺人及び未遂';
    }).prop('selected', true);
    $('.js-select').eq(3).find('option').filter(function (index) {
      return $(this).text() === '銃刀法違反';
    }).prop('selected', true);
  })
  // 犯罪セット
  $('.js-set-bank').on('click', function () {
    $('.js-select').eq(0).find('option').filter(function (index) {
      return $(this).text() === '銀行強盗罪';
    }).prop('selected', true);
    $('.js-select').eq(1).find('option').filter(function (index) {
      return $(this).text() === '公務執行妨害';
    }).prop('selected', true);
    $('.js-select').eq(2).find('option').filter(function (index) {
      return $(this).text() === '公務員殺人及び未遂';
    }).prop('selected', true);
    $('.js-select').eq(3).find('option').filter(function (index) {
      return $(this).text() === '銃刀法違反';
    }).prop('selected', true);
  })

  var accordions = bulmaAccordion.attach();
});
