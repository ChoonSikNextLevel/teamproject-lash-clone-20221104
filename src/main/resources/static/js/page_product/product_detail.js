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
  location.href = "/payment";
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
    },
    error: (error) => {
      console.log(error);
    }
  })


}

