const param = {
    page: 1,
  };
  
  function addressList() {
    $.ajax({
      async: false,
      type: "get",
      url: "/api/account/shippingAddress",
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

function addressList(responseData) {
    const addressBody = document.querySelector(".center");

    addressBody.innerHTML="";

    responseData.forEach((address, index) => {

        address.innerHTML +=`
        <tr class="xans-record-">
            <td>
                <input name="ma_idx[]" value="717" type="checkbox">
            </td>
            <td>
                <a href="/exec/front/Myshop/Addr/?mode=Fix&amp;ma_idx=717&amp;ma_fixed_flag=F&amp;return_url=%2Fmyshop%2Faddr%2Flist.html">
                    <img src="//img.echosting.cafe24.com/skin/base_ko_KR/myshop/btn_address_clear.gif" class="" alt="해제">
                    // <img src="//img.echosting.cafe24.com/skin/base_ko_KR/myshop/btn_address_fix.gif" class="displaynone" alt="고정">
                </a>
                <span class="displaynone">-</span>
            </td>
            <td>
                <img src="//img.echosting.cafe24.com/skin/base_ko_KR/myshop/ico_addr_default.gif" class="displaynone" alt="기본">
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
                (<span>48744</span>)<span>${address.address}</span>
                <span>(<span>${address.address_number}</span>)${address.address_edtail}</span>
            </td>
            <td>
                <a href="modify.html?ma_idx=717" class="btnType-1">삭제</a>
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
            alert("삭제버튼 클릭");

            localStorage.setItem("address", JSON.stringify(responseData[index]));

            console.log("전체 : ", address);  // 제품 정보 배열 전체

            const addrssId = product.address_Id;
            console.log("번호만 : ", addrssId);  // 등록된 순번 가져오기

            if (confirm("삭제?")) {

                $.ajax({
                    async: false,
                    type: "delete",
                    url: "/api/admin/product/" +addrssId,
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
window.onload = () => {
    addressList();
  };
  
  