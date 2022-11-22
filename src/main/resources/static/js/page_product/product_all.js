
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



//=========== collection 불러오기 =============//


const uri = location.href;
const category = uri.substring(uri.lastIndexOf("/") + 1);
console.log(category);

function getCollection() {
    
    $.ajax({
        async: false,
        type: "get",
        url: "/api/collection/" + category,
        dataType: "json",
        success: (response) => {
            alert("COLLECTION 불러오기 성공");
            console.log("응답 : ", response.data);
            loadCollection(response.data);
            
            groupByName(response.data);
        },
        error: (error) => {
            alert("COLLECTION 불러오기 실패");
            console.log(error);
        },
    });
}


// 이름으로 그룹 묶기
function groupByName(responseData) {
    const nameArray = responseData.reduce( (array, curV) => {
        const {name} = curV;
        
        if (array[name]) {
           array[name].push(curV);
        }else {
           array[name] = [curV];
        }
        return array;               
        }
        , { });
    
    console.log(nameArray);
    return nameArray;
}



const productContainer = document.querySelector(".product-container");

function loadCollection(collection) {
    console.log("컬렉션 : " , collection);
    
    collection.forEach(product => {
        const productName = product.name;

        console.log("이름 : " , productName);
        console.log("제품 : ", product);
        console.log("카테고리 : ", product.category);
        console.log("이미지 : ", product.img_name);
                
            productContainer.innerHTML += `
                <div class="product-list">
                    <div class="product-list-img">
                        <div class="product-hunter hunter-c1">
                            <a href="/products/product/${product.name}/${product.color_code}">  
                                <img src="/image/product/${product.img_name}">
                            </a>
                        </div>
                    </div>
                    <div class="product-info-box">
                        <div class="product-info-text">
                            <p class="product-name">${product.name}</p>
                            <p class="product-price">KRW ${product.price}</p>
                        </div>
                        <div class="product-info-color hunter-color">
                            <img src="/static/images/product_img/product_color_img/HUNTER_c1.jpg">
                            <img src="/static/images/product_img/product_color_img/HUNTER_c2.jpg">
                            <img src="/static/images/product_img/product_color_img/HUNTER_c3.jpg">
                            <img src="/static/images/product_img/product_color_img/HUNTER_c4.jpg">
                        </div>
                    </div>
                </div>
            `;
        });
}


window.onload = () => {
    getCollection();
    // groupByName();
}