$(function() {
    $('.hunter-color > img').mouseover(function(){

        let i = $(this).index();
    
    // $('.product-info-color > img').mouseover(function(){
    //     let i = $(this).index();

        $('.product-list-img .product-hunter').hide();
        $('.product-list-img .product-hunter').eq(i).show();
    });
});
