/*  상세 정보 */

const fea = document.getElementById("proFea");
const des = document.getElementById("proDes");
const rPolicy = document.getElementById("rPolicy");

const ex1 = document.querySelector(".ex1");
const ex2 = document.querySelector(".ex2");
const ex3 = document.querySelector(".ex3");

fea.addEventListener("click", () => {
  ex1.classList.toggle("invisible");
});

des.addEventListener("click", () => {
  ex2.classList.toggle("invisible");
});

rPolicy.addEventListener("click", () => {
  ex3.classList.toggle("invisible");
});

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

/* ------------- get product by ajax -------------------- */

const pageUrl = window.location.href;
// console.log(pageUrl);
let result = pageUrl.split("/");

// result.forEach((r) => {
//   console.log(r);
// });

const productInfo = {
  name: result[5],
  colorCode: result[6],
};

function getProductData() {
  $.ajax({
    async: false,
    type: "get",
    url: "/api/product/" + productInfo.name + "/" + productInfo.colorCode,
    dataType: "json",
    success: (response) => {
      console.log(response.data);
      loadProduct(response.data);
    },
    error: (error) => {
      alert("실패");
      console.log(error);
    },
  });
}

const imgSection = document.querySelector(".img-scroll");
const pdName = document.querySelector(".pd-name");
const pdPrice = document.querySelector(".pd-price");

const moreColor = document.querySelector(".more-color");

function loadProduct(data) {
  data.forEach((product) => {
    console.log(product);

    if (product.color_code == productInfo.colorCode) {
      product.product_imgs.forEach((img) => {
        imgSection.innerHTML += `
								<img src="/image/product/${img.img_name}">
							`;
        console.log(img.img_name);
      });

      pdName.innerHTML = `${product.name} ${product.color_code}`;
      pdPrice.innerHTML = `KRW ${product.price}`;
      ex1.innerHTML = `${product.product_features}`;
      ex2.innerHTML = `${product.description}`;

      localStorage.setItem("buy-now-product", JSON.stringify(product));
    } else {
      moreColor.innerHTML += `
									<a href="/products/product/${product.name}/${product.color_code}"><img src="/image/product/${product.product_imgs[0].img_name}"></a>
								`;
    }
  });

  console.log("끝");
}

window.onload = () => {
  getProductData();
};

const buyBtn = document.querySelector(".buy-now-button");

buyBtn.onclick = () => {
  getMemberInfo();
  if (impData["buyer_id"] != undefined) {
    location.href = "/payment";
  }
};

const addButton = document.querySelector(".add-button");

addButton.onclick = () => {
  $.ajax({
    async: false,
    type: "post",
    url: "/api/shoppingBasket",
    data: productInfo,
    dataType: "json",
    success: (response) => {
      alert("상품을 쇼핑카트에 넣었습니다.");
      console.log(response.data);
    },
    error: (error) => {
      alert("로그인 해주세요.");
      location.href = "/account/login";
      console.log(error);
    },
  });
};

/** 카카오페이 간편결제 */
const kbtn = document.querySelector(".npay-button");
var IMP = window.IMP;
IMP.init("imp75586747");

let impData = null;
// 함수1. ajax 로 로그인한 유저 정보를 가져온다 .
// 근데 배송지 없으면 주문 할 수 없음 .
// 정보 성공적으로 가져오면 IMP.request_pay() 실행되도록 //

// 결제가 실행되면 , 주문번호를 데이터베이스에서 가져와야함. or 날짜 + 고유한 주문번호를 생성해주기

// 결제 성공시, db에 주문 정보 보냄

function getMemberInfo() {
  $.ajax({
    async: false,
    type: "get",
    url: "/api/order/member/info",
    // data : (로그인이 되어 있으면 컨트롤러에서 principal 객체를 파라미터로 받아올 수 있음)
    dataType: "json",
    success: (response) => {
      // response data 에 principal 객체에서 필요한 정보를 담아 서버에서 보내주게 됨
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

function checkMemberAddress(impdata) {
  if (impdata.buyer_postcode != undefined) {
    console.log(impdata["buyer_postcode"]);
    return true;
  } else {
    console.log(impdata["buyer_postcode"]);
    alert("주소지 정보가 없습니다. 마이페이지에서 등록해 주세요.");
    return false;
  }
}

kbtn.onclick = () => {
  // 함수1 실행됨
  getMemberInfo();
  console.log(impData);

  if (checkMemberAddress(impData)) {
    IMP.request_pay(
      {
        pg: "kakaopay.TC0ONETIME", //테스트인경우 kcp.T000
        pay_method: "card",
        merchant_uid: new Date().getTime(), //상점에서 생성한 고유 주문번호
        name: "주문명:결제테스트",
        amount: 1,
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
  }
};


const addButton = document.querySelector(".add-button");

addButton.onclick = () => {
  $.ajax({
    async: false,
    type: "post",
    url: "/api/shoppingBasket",
    data: productInfo,
    dataType: "json",
    success: (response) => {
      console.log(response.data);
      alert("추가되었습니다.");
    },
    error: (error) => {
      console.log(error);
    }
  })

}


