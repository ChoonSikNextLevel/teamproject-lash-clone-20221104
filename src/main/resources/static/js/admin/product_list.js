const param = {
  page: 1,
};


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
      alert("상품 리스트 불러오기 실패");
      console.log(error);
    },
  });
}


function loadList(responseData) {
  const loadBody = document.querySelector(".center");

  loadBody.innerHTML = "";

  responseData.forEach((product, index) => {
    const productImgsArray = product.productImgs;
    console.log(product.productImgs);

    loadBody.innerHTML += `
        <tr class="xans-record-">
            <td>
                ${product.productId}
            </td>
            <td>
                <img src="/image/product/${productImgsArray[0].img_name}">      
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
                <a class="btnType-1 delete-button">삭제</a>
            </td>
        </tr>
        `;
  });

  setListValues(responseData);
  productDelete()
}

// 수정 버튼 눌렀을 때 해당 상품 수정 페이지로 이동(기존 값 그대로)
function setListValues() {
  const updateButton = document.querySelectorAll(".update-button");

  updateButton.forEach((updateBtn, index) => {
    updateBtn.onclick = () => {
      alert("수정 페이지로 이동합니다.");
      localStorage.setItem("product", JSON.stringify(responseData[index]));
      location.href = "/admin/product/update";
    };
  });
}



function productDelete() {

  const deleteButton = document.querySelectorAll(".delete-button");

  deleteButton.forEach((deleteBtn, index) => {
    deleteBtn.onclick = () => {
      alert("삭제버튼 클릭")
      localStorage.setItem("product", JSON.stringify(responseData[index]));

      console.log(responseData[index]);

      let id = localStorage.getItem("productId");
      console.log(id);


      // if(localStorage.getItem("productId")) {
      //   id = localStorage.getItem("productId");
      // }



      // if (confirm("삭제?")) {

      //   $.ajax({
      //     async: false,
      //     type: "delete",
      //     url: "/api/admin/product/" + productId,
      //     dataType: "json",
      //     success: (response) => {
      //         alert("상품 삭제 했다!");
      //         location.reload();
      //     },
      //     error: (error) => {
      //         alert("상품 삭제 못했다!");
      //         console.log(error);
      //     }
      //   });
      // }



    }
  });
}

window.onload = () => {
  productList();
};
