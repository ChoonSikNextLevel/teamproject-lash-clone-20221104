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
  deleteProduct();
}

// 수정 버튼 눌렀을 때 해당 상품 수정 페이지로 이동(기존 값 그대로)
function setListValues() {
  const updateButton = document.querySelectorAll(".update-button");

  updateButton.forEach((updateBtn, index) => {
    updateBtn.onclick = () => {
      alert("제품 정보 수정 페이지로 이동합니다.");
      localStorage.setItem("product", JSON.stringify(responseData[index]));
      location.href = "/admin/product/update";
    };
  });
}


// 제품 삭제 기능
function deleteProduct() {

  const deleteButton = document.querySelectorAll(".delete-button");

  deleteButton.forEach((deleteBtn, index) => {
    deleteBtn.onclick = () => {
      alert("삭제버튼 클릭");

      localStorage.setItem("product", JSON.stringify(responseData[index]));
            
      // localStorage로 저장된 배열 중 productId만 들고오기
      const product = JSON.parse(localStorage.getItem("product"));
      console.log("전체 : ", product);  // 제품 정보 배열 전체

      const productId = product.productId;
      console.log("번호만 : ", productId);  // 등록된 순번 가져오기

      if (confirm("삭제?")) {

        $.ajax({
          async: false,
          type: "delete",
          url: "/api/admin/product/" + productId,
          dataType: "json",
          success: (response) => {
              alert("상품 삭제 했다!");
              location.reload();
          },
          error: (error) => {
              alert("상품 삭제 못했다!");
              console.log(error);
          }
        });
      }



    }
  });
}

window.onload = () => {
  productList();
};
