
function updateProduct(formData) {

    // 수정 후 등록 시 아래 데이터 전송(post)
    $.ajax({
        async: false,
        type: "post",
        url: "/api/admin/product/update",
        enctype: "multipart/form-data",
        contentType: false,
        processData: false,
        data: formData,
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


function getOriginValues(product) {
    const updateInput = document.querySelectorAll(".update-input");
    
    //  select value 값 불러오기
    const updateSelect = document.querySelector("#update-select");
    const selectLength = updateSelect.options.length;
    let optionValue = product.category;

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



window.onload = () => {
    let product = JSON.parse(localStorage.getItem("product"));
    console.log(product);
    getOriginValues(product);
    // productList();
}