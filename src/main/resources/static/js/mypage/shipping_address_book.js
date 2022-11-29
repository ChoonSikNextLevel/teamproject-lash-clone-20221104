function addressList() {
    $.ajax({
      async: false,
      type: "get",
      url: "/api/account/shippingAddress",
      dataType: "json",
      success: (response) => {
        responseData = response.data;
        console.log(responseData);
        loadList(responseData);
  
        // responseData를 JSON 형식으로 보여주기
        // console.log(JSON.stringify(responseData[]));
      },
      error: (error) => {
        alert("배송지 리스트 불러오기 실패");
        console.log(error);
      },
    });
}

function loadList(responseData) {
    const addressBody = document.querySelector(".center");
    console.log(addressBody);
    addressBody.innerHTML="";
    responseData.forEach((address, index) => {
        addressBody.innerHTML +=`
        <tr class="xans-record-">
            <td>
                <span>
                    ${address.address_name}
                </span>
            </td>
            <td>
                <span>
                    ${address.recipient}
                </span>
            </td>
            <td><span>${address.land_phone}</span></td>
            <td><span>${address.mobile_phone}</span></td>
            <td class="left">
                (<span>${address.address_number}</span>)<span>${address.address}</span>
                <span>${address.address_detail}</span>
            </td>
            <td>
                <input type="hidden" value="${address.address_id}" class="address-id">
                <button type="button" class="btnType-1">삭제</button>
            </td>
        </tr>   
         `;
    });
    deleteAddress();
}

function deleteAddress() {
    const deleteButton = document.querySelectorAll(".btnType-1");

    deleteButton.forEach((deleteBtn, index) =>{
        deleteBtn.onclick = () => {
            const id = document.querySelectorAll(".address-id");
            const id2 = id[index].value;
            // console.log(id[index].value)
            alert("삭제버튼 클릭");

            // localStorage.setItem("address", JSON.stringify(responseData[index]));
            // console.log("전체 : ", address);  // 제품 정보 배열 전체
            // const addrssId = address.address_Id;
            // console.log("번호만 : ", addrssId);  // 등록된 순번 가져오기

            if (confirm("삭제?")) {

                $.ajax({
                    async: false,
                    type: "delete",
                    url: "/api/account/shippingAddress/" +id2,
                    dataType: "json",
                    success: (response) => {
                        alert("주소 삭제 했다!");
                        location.reload();
                    },
                    error: (error) => {
                        alert("주소 삭제 못했다!");
                        console.log(error);
                    }
                });
            }
        }
    });
}

// $(".btnType-1").on("click", function(e){
// 	e.preventDefault();
// 	const cartId = $(this).data("cartid");
// });
window.onload = () => {
    addressList();
    // console.log(localStorage.getItem("address"))
  };
  
  