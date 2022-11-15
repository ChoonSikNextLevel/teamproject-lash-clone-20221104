// 결제내역 체크박스 일괄선택,해제
function selectAll(selectAll) {
    const checkboxes
        = document.getElementsByName('product-list-select');

    checkboxes.forEach((checkbox) => {
        checkbox.checked = selectAll.checked;
    })
}
// 결제수단 선택시 각각 다른 div 보이게하기


/* top 버튼 */

$(function () {

    $("#top").hide();



    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 900) {
                $('#top').fadeIn();
            } else {
                $('#top').fadeOut();
            }
        });

        $('#top a').click(function () {
            $('body,html').animate({
                scrollTop: 0
            }, 500);
            return false;
        });
    });

});


