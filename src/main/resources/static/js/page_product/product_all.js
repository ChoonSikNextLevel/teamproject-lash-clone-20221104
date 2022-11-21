
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

// ============================================================================

const uri = location.href;
const category = uri.substring(uri.lastIndexOf("/") + 1);
let responseData = null;

function getCollection() {

    $.ajax({
        async: false,
        type: "get",
        url: "/api/collection/" + category,
        dataType: "json",
        success: (response) => {
            alert("COLLECTION 불러오기 성공");
            responseData = response.data;
            console.log(responseData);
        },
        error: (error) => {
            alert("COLLECTION 불러오기 실패");
            console.log(error);
        },
    });
}


const productImg = document.querySelector(".product-list-img");
const productName = document.querySelector(".product-name");
const productPrice = document.querySelector(".product-price");

function loadCollection() {
    

    




}






window.onload = () => {
    getCollection();
}
