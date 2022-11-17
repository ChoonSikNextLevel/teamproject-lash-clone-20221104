const param = {
    page: 1
}

function productList() {
    $.ajax({
        async: false,
        type: "get",
        url: "/api/admin/products",
        data: param,
        dataType: "json",
        success: (response) => {
            responseData = response.data;
            console.log(responseData);
            loadList(responseData);

            // responseData를 JSON 형식으로 보여주기
            // console.log(JSON.stringify(responseData[]));
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
                <a class="btnType-1 update-button">수정</a>
            </td>
            <td>
                <a href="modify.html?ma_idx=717" class="btnType-1 delete-button">삭제</a>
            </td>
        </tr>
        `;

    });
    
    setListValues(responseData);
}

function setListValues(data) {
    const updateButton = document.querySelectorAll(".update-button");

    updateButton.forEach((button, index) => {
        button.onclick = () => {
            alert("클릭");
            localStorage.setItem("product", JSON.stringify(responseData[index]));
            location.href = "/admin/product/update";
        }
        
            // for(let i = 0; i < updateButton.length; i++) {
            //     updateButton[i].onclick = () => {
            //         alert("클릭했네");
            //         location
            //     }
            // }
    });
}

window.onload = () => {
    productList();
}