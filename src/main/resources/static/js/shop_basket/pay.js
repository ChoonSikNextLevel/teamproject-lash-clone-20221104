// 결제내역 체크박스 일괄선택,해제
function selectAll(selectAll) {
  const checkboxes = document.getElementsByName("product-list-select");

  checkboxes.forEach((checkbox) => {
    checkbox.checked = selectAll.checked;
  });
}
// 결제수단 선택시 각각 다른 div 보이게하기
function payMethod(element) {
  let de = document.getElementsByName("pay-detail");
  let fi = document.getElementsByClassName("pay-method-box-right");

  for(var i = 0; i < de.length; i++) {
    if(de[i].classList.contains(element.id)){
      de[i].classList.remove("none");
      fi[i].classList.remove("none");
    }else {
      de[i].classList.add("none");
      fi[i].classList.add("none");
    }
  }
}

/* top 버튼 */

$(function () {
  $("#top").hide();

  $(function () {
    $(window).scroll(function () {
      if ($(this).scrollTop() > 900) {
        $("#top").fadeIn();
      } else {
        $("#top").fadeOut();
      }
    });

    $("#top a").click(function () {
      $("body,html").animate(
        {
          scrollTop: 0,
        },
        500,
      );
      return false;
    });
  });
});

/* 상품 상세 페이지에서 buy now 해서 하나만 결제 할 때 . . . . . */

const productListBody = document.querySelector(".product-list-tbody");
const productListFoot = document.querySelector("tfoot");
const paymentTotalPrice = document.querySelector(".payment-total-price");
const afterDiscount = document.querySelector(".after-discount");
const paymentTotal = document.querySelector(".payment-total");

function buynowOrder() {
  let product = JSON.parse(localStorage.getItem("buy-now-product"));

  productListBody.innerHTML = ``;
  productListBody.innerHTML = `
                    <tr style="height: 112px;">
                        <td class="product-list-table-input">
                            <input type="checkbox" name="product-list-select">
                        </td>
                        <td class="product-list-table-image">
                            <a href="/products/product/${product.name}/${product.color_code}">
                                <img src="/image/product/${product.product_imgs[0].img_name}">
                            </a>
                        </td>
                        <td class="product-list-table-product-info">
                            <a href="/products/product/${product.name}/${product.color_code}">
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
                                <div>(해외배송불가)</div>
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

  orderData(product);
}

/** 결제할 상품, 수량, 가격 */
let orderItems = [];

function orderData(product) {
  if (product.length != undefined) {
    product.forEach((p) => {
      orderItems.push(p);
    });
  } else {
    orderItems.push(product);
  }

  console.log(orderItems);
  return orderItems;
}

function getTotalPrice(items) {
  let totalPrice = 0;

  items.forEach((item) => {
    totalPrice = totalPrice + item.price;
  });

  console.log(totalPrice);
  return totalPrice;
}

/** 결제 */
var IMP = window.IMP;
IMP.init("imp75586747");

let impData = null;

function getMemberInfo() {
  $.ajax({
    async: false,
    type: "get",
    url: "/api/order/member/info",
    dataType: "json",
    success: (response) => {
      getImpData(response.data);
      console.log(response.data);
      console.log(impData);
    },
    error: (error) => {
      alert("회원 로그인 후 구매하실 수 있습니다.");
      location.href = "/account/login";
    },
  });
}

function getImpData(responseData) {
  impData = {
    buyer_id: responseData.member_id,
    buyer_email: responseData.email,
    buyer_name: responseData.name,
    buyer_tel: responseData.mobile_phone,
    buyer_addr: responseData.address + " " + responseData.address_detail,
    buyer_postcode: responseData.address_number,
  };

  return impData;
}

const payMethodN = document.getElementById("pay-method-normal");
const payMethodK = document.getElementById("pay-method-kakao");
const payMethodT = document.getElementById("pay-method-toss");
const payBtn = document.querySelector(".pay-button");

payBtn.onclick = () => {
  if (payMethodN.checked) {
    alert("일반결제");

    IMP.request_pay(
      {
        pg: "html5_inicis.INIpayTest", //테스트 시 html5_inicis.INIpayTest 기재
        pay_method: "card",
        merchant_uid: new Date().getTime(), //상점에서 생성한 고유 주문번호
        name: "주문명:KG이니시스 결제테스트",
        amount: getTotalPrice(orderItems),
        buyer_email: "iamport@siot.do",
        buyer_name: "구매자이름",
        buyer_tel: "010-1234-5678", //필수 파라미터 입니다.
        buyer_addr: "서울특별시 강남구 삼성동",
        buyer_postcode: "123-456",
        m_redirect_url: "{모바일에서 결제 완료 후 리디렉션 될 URL}",
        escrow: true, //에스크로 결제인 경우 설
        bypass: {
          acceptmethod: "noeasypay", // 간편결제 버튼을 통합결제창에서 제외(PC)
          P_RESERVED: "noeasypay=Y", // 간편결제 버튼을 통합결제창에서 제외(모바일)
          acceptmethod: "cardpoint", // 카드포인트 사용시 설정(PC)
          P_RESERVED: "cp_yn=Y", // 카드포인트 사용시 설정(모바일)
        },
        period: {
          from: "20220101", //YYYYMMDD
          to: "20221231", //YYYYMMDD
        },
      },
      function (rsp) {
        // callback 로직
        if (rsp.success) {
          alert("구매되었습니다. 감사합니다.");
        } else {
          alert("결제 실패하였습니다. 다시 한 번 시도해 주세요. ");
        }
      },
    );
  } else if (payMethodK.checked) {
    alert("카카오결제");

    IMP.request_pay(
      {
        pg: "kakaopay.TC0ONETIME", //테스트인경우 kcp.T000
        pay_method: "card",
        merchant_uid: new Date().getTime(), //상점에서 생성한 고유 주문번호
        name: "주문명:카카오페이 결제테스트",
        amount: getTotalPrice(orderItems),
        company: "lash", //해당 파라미터 설정시 통합결제창에 해당 상호명이 노출됩니다.
        buyer_email: "address002@naver.com",
        buyer_name: "나갱",
        buyer_tel: "010-9044-2249",
        buyer_addr: "서울특별시 강남구 삼성동",
        buyer_postcode: "123-456",
        language: "ko", // en 설정시 영문으로 출력되면 해당 파라미터 생략시 한국어 default
        m_redirect_url: "{모바일에서 결제 완료 후 리디렉션 될 URL}",
      },
      function (rsp) {
        // callback 로직
        if (rsp.success) {
          alert("구매되었습니다. 감사합니다.");
        } else {
          alert("결제 실패하였습니다. 다시 한 번 시도해 주세요. ");
        }
      },
    );
  } else if (payMethodT.checked) {
    alert("토스결제");

    IMP.request_pay(
      {
        pg: "uplus.tosstest",
        pay_method: "card",
        merchant_uid: new Date().getTime(), //상점에서 생성한 고유 주문번호
        name: "주문명:토스페이 결제테스트",
        amount: getTotalPrice(orderItems),
        buyer_email: "iamport@siot.do",
        buyer_name: "구매자이름",
        buyer_tel: "010-1234-5678",
        buyer_addr: "서울특별시 강남구 삼성동",
        buyer_postcode: "123-456",
        m_redirect_url: "{모바일에서 결제 완료 후 리디렉션 될 URL}",
        appCard: true, // 설정시 신용카드 결제모듈에서 앱카드 결제만 활성화됩니다.
      },
      function (rsp) {
        // callback 로직
        if (rsp.success) {
          alert("구매되었습니다. 감사합니다.");
        } else {
          alert("결제 실패하였습니다. 다시 한 번 시도해 주세요. ");
        }
      },
    );
  }
};

window.onload = () => {
  if (localStorage.getItem("buy-now-product")) {
    buynowOrder();
    localStorage.clear();
    // 결제
  } else {
    // 쇼핑 카트에서 결제 페이지로 넘어왔을 때
  }
};

// 성공시 주문정보 db insert

let orderInfo = {
  name: "",
  color_code: "",
  qty: "",
  member_id: impData["buyer_id"],

  orderer: "",
  or_address_number: "",
  or_address: "",
  or_address_detail: "",
  or_mobile_phone: "",
  or_land_phone: "",

  recipient: "",
  re_address_number: "",
  re_address: "",
  re_address_detail: "",
  re_mobile_phone: "",
  re_land_phone: "",
};
