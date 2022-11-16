const param = {
    page: 1
}

function productList() {
    $.ajax({
        async: false,
        type: "get",
        url: "/api/admin/products",

        // data에 들어갈 항목은?
        data: param,
        dataType: "json",
        success: (response) => {
            alert("상품 리스트 불러오기 성공")
            responseData = response.data;
            console.log(responseData);
            loadList(responseData);
        },
        error: (error) => {
            alert("상품 리스트 불러오기 실패")
            console.log(error);
        }
    });
}

function loadList(responseData) {
    
    const loadBody = document.querySelector(".center");

    loadBody.innerHTML = "";

    responseData.forEach((product) => {

        loadBody.innerHTML += `
        <tr class="xans-record-">
            <td>
                ${product.productId}
            </td>
            <td>
                <img src="/static/images/Logo_img/lash_logo.png">
            </td>
            <td>
                ${product.name}
            </td>
            <td>
                ${product.colorCode}
            </td>
            <td>
                ${product.price}
            </td>
            <td>
                <a href="modify.html?ma_idx=717" class="btnType-1">수정</a>
            </td>
            <td>
                <a href="modify.html?ma_idx=717" class="btnType-1">삭제</a>
            </td>
        </tr>

        `;
    });
}



window.onload = () => {
    productList();
}