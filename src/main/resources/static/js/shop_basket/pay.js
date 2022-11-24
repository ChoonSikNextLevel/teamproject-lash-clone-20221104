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

/* 상품 상세 페이지에서 buy now btn 해서 하나만 결제 할 때 . . . . . */

const productListBody = document.querySelector(".product-list-tbody");
const productListFoot = document.querySelector("tfoot");
const paymentTotalPrice = document.querySelector(".payment-total-price");
const afterDiscount = document.querySelector(".after-discount");
const paymentTotal = document.querySelector(".payment-total"); 

function buynowOrder() {
    let product = JSON.parse(localStorage.getItem("buy-now-product"));
    //localStorage.clear();

    productListBody.innerHTML = ``;
    productListBody.innerHTML = `
                    <tr style="height: 112px;">
                        <td class="product-list-table-input">
                            <input type="checkbox" name="product-list-select">
                        </td>
                        <td class="product-list-table-image">
                            <a href="">
                                <img src="/image/product/${product.product_imgs[0].img_name}">
                            </a>
                        </td>
                        <td class="product-list-table-product-info">
                            <a href="">
                                <strong>
                                    ${product.name} ${product.color_code}
                                </strong>
                            </a>
                        </td>
                        <td class="product-list-table-price">
                            <div>
                                <strong>KRW ${product.price}</strong>
                            </div>
                        </td>
                        <td class="product-list-table-count">1</td>
                        <td class="product-list-table-reserves">
                            <span class="product-list-table-reserves-text">-</span>
                        </td>
                        <td class="product-list-table-shipping-category">
                            <div class="product-list-table-shipping-category-text">
                                기본배송
                                <div>(해외배송가능)</div>
                            </div>
                        </td>
                        <td class="product-list-table-shipping-price">[무료]</td>
                        <td class="product-list-table-total-price">
                            <strong>KRW ${product.price}</strong>
                        </td>
                    </tr>
    `;

    productListFoot.innerHTML = `
                    <tr>
                        <td class="product-list-table-input"></td>
                        <td colspan="8">
                            <span>[기본배송]</span>
                            상품구매금액
                            <strong>
                            ${product.price}
                            </strong>
                            + 배송비
                            <span>0 (무료)</span>
                            = 합계 :
                            <strong>
                                KRW
                                <span>${product.price}</span>
                            </strong>
                        </td>
                    </tr>
    `;

    paymentTotalPrice.innerHTML = `${product.price}`;
    afterDiscount.innerHTML = `${product.price}`;    
    paymentTotal.value = product.price;
    
}



window.onload = () => {
    if (localStorage.getItem("buy-now-product")) {
        buynowOrder();
        localStorage.clear();
    } else {
    
        // 쇼핑 카트에서 결제 페이지로 넘어왔을 때
    
    }
}
