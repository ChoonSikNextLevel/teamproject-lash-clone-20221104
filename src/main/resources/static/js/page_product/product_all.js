
// 상품 리스트에서 아래 color spec 마우스 오버 시 해당 상품 보여주기

$(function() {
    $('.hunter-color > img').mouseover(function(){

        let i = $(this).index();
    
    // $('.product-info-color > img').mouseover(function(){
    //     let i = $(this).index();

        $('.product-list-img .product-hunter').hide();
        $('.product-list-img .product-hunter').eq(i).show();
    });
});



function getCollections() {

    const uri = location.href;
    const category = uri.substring(uri.lastIndexOf("/") + 1);
    let responseData = null;

    $.ajax({
        async: false,
        type: "get",
        url: "/api/collection" + category,

        // data에 들어갈 값은?
        data: ,
        dataType: "json",
        success: (response) => {
            responseData = response.data;
            console.log(responseData);
        },
        error: (error) => {
            alert("상품 리스트 불러오기 실패");
            console.log(error);
        },
    });

}

function loadCollection() {
    const products = document.querySelector(".product-list")
}






window.onload = () => {

}
