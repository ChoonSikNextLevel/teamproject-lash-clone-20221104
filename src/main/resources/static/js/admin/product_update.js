let product = JSON.parse(localStorage.getItem("product"));
let productId = product.productId;


// 항목별로 등록되어 있는 value 값 불러오기
function getOriginValues(product) {
    const updateInput = document.querySelectorAll(".update-input");
    
    //  select value 값 불러오기
    const updateSelect = document.querySelector("#update-select");
    const selectLength = updateSelect.options.length;
    let optionValue = product.category;

    // 기존 select 값과 일치하는 value에 seleted 옵션을 줘라
    for(let i = 0; i < selectLength; i++) {
        if(updateSelect.options[i].value == optionValue) {
            updateSelect.options[i].selected = true;
        }
    }

    updateInput[1].innerHTML = `
    <input id="member_id" class="product-input" name="member_id" type="text" value="${product.name}"></input>
    `;

    updateInput[2].innerHTML = `
    <input id="member_id" class="product-input" name="member_id" type="text" value="${product.colorCode}"></input>
    `;

    updateInput[3].innerHTML = `
    <input id="member_id" class="product-input" name="member_id" type="text" value="${product.color}"></input>
    `;

    updateInput[4].innerHTML = `
    <input id="member_id" class="product-input" name="member_id" type="text" value="${product.price}"></input>
    `;

    updateInput[5].innerHTML = `
    <textarea class="product-features-ex product-input" placeholder="">${product.productFeatures}</textarea>
    `;

    updateInput[6].innerHTML = `
    <textarea class="product-features-ex product-input" placeholder="">${product.description}</textarea>
    `;

}

// 수정 후 등록 시 아래 데이터 전송(post)

const updateButton = document.querySelector(".registration-button");

updateButton.onclick = () => {
    alert("클릭됐다");
    updateProduct();
}

function updateProduct() {
    const productInput = document.querySelectorAll(".product-input");
    
    let productForm = new FormData();
    // let productImgs = document.getElementById("product-imgs");
    
    productForm.append("productId", productId);
    productForm.append("category", productInput[0].value);
    productForm.append("name", productInput[1].value);
    productForm.append("colorCode", productInput[2].value); // color_code 로 쓰면 못 알아 봄 !! dto에 있는 이름 대로 . .
    productForm.append("color", productInput[3].value);
    productForm.append("price", productInput[4].value);
    productForm.append("productFeatures", productInput[5].value);
    productForm.append("description", productInput[6].value);

    $.ajax({
        async: false,
        type: "post",
        url: "/api/admin/product/update",
        enctype: "multipart/form-data",
        contentType: false,
        processData: false,
        data: productForm,
        dataType: "json",
        success: (response) => {
            alert("상품 수정 완료");
            location.reload();
        },
        error: (error) => {
            alert("상품 수정 실패");
            console.log(error);
        }
    });
}

window.onload = () => {
    // let product = JSON.parse(localStorage.getItem("product"));
    // let productId = product.productId;
    console.log(product);
    getOriginValues(product);
}