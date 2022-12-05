/*----------- date picker ---------------*/

$(document).ready(function () {
    $.datepicker.setDefaults({
      closeText: "닫기",
      currentText: "오늘",
      prevText: "이전 달",
      nextText: "다음 달",
      monthNames: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
      monthNamesShort: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
      dayNames: ["일", "월", "화", "수", "목", "금", "토"],
      dayNamesShort: ["일", "월", "화", "수", "목", "금", "토"],
      dayNamesMin: ["일", "월", "화", "수", "목", "금", "토"],
      weekHeader: "주",
      yearSuffix: "년",
    });
});

$(function () {
    $("#history_start_date, #history_end_date").datepicker({
      dateFormat: "yy-mm-dd",
      showOn: "button",
      buttonImage: "/static/images/btn_img/ico_cal.gif",
      buttonImageOnly: true,
      showButtonPanel: true,
      maxDate: "today",
      minDate: "-2y",
    });
  
    $("#history_start_date, #history_end_date").datepicker("setDate", "today");
});
  
$(function () {
    $(".btnNormal1").on("click", function (e) {
        $("#history_start_date, #history_end_date").datepicker("setDate", "$('a').attr('days')");
    });

    $(".btnNormal2").on("click", function (e) {
        $("#history_start_date").datepicker("setDate", "-7D");
        $("#history_end_date").datepicker("setDate", "today");
    });

    $(".btnNormal3").on("click", function (e) {
        $("#history_start_date").datepicker("setDate", "-1M");
        $("#history_end_date").datepicker("setDate", "today");
    });

    $(".btnNormal4").on("click", function (e) {
        $("#history_start_date").datepicker("setDate", "-3M");
        $("#history_end_date").datepicker("setDate", "today");
    });

    $(".btnNormal5").on("click", function (e) {
        $("#history_start_date").datepicker("setDate", "-6M");
        $("#history_end_date").datepicker("setDate", "today");
    });
});
let param = {
    status: "all",
};

const orderList = document.querySelector(".order-list");
function getOrder() {
    $.ajax({
        async: false,
        type: "get",
        url: "/api/account/mypage/order",
        // data: param,
        dataType: "json",
        success: (response) => {
            alert("상품 불러오기성공 성공");
            responseData = response.data;
            console.log(responseData);
            loadOrder(responseData);
        },
        error: (error) => {
            alert("상품 불러오기실패 실패");
            console.log(error);
        },
    });
}
function loadOrder(responseData) {
    orderList.innerHTML = "";
  
    responseData.forEach((order, index) => {
      if (order.order_id != null) {
        const orderImgsArray = order.productImgs;
        orderList.innerHTML += `
                          <tr>
                              <td>${order.order_date}
                              <br>[${order.order_id}]
                              </td>
                              <td>${orderImgsArray[0].img_name}</td>
                              <td>${order.product_count}</td>
                              <td>${order.price} 원</td>
                              <td>${order.re_address} ${order.re_address_detail}</td>
                              <td>
                                  <select id="order-status2" name="order-status">
                                      
                                      <option value="shipped_before">결제완료</option>
                                      <option value="shipped_begin">배송중</option>
                                      <option value="shipped_complete">배송완료</option>
                                  </select>
                              </td>
                              <td><button class="status-update"><i class="fa-solid fa-arrow-up"></i></button></td>
                          </tr>
    `;
      }
      const updateSelect = document.querySelector("#order-status2");
      const selectLength = updateSelect.options.length;
      let optionValue = order.status;
  
      // 기존 select 값과 일치하는 value에 seleted 옵션을 줘라
      for (let i = 0; i < selectLength; i++) {
        if (updateSelect.options[i].value == optionValue) {
          updateSelect.options[i].selected = true;
        }
      }
    });
  }

function loadByStatus() {
    const statusSelect = document.querySelector("#order-status");

    statusSelect.onchange = () => {
        param.status = statusSelect.value;
        console.log("status : ", param.status);
        getOrder();
    };
}

// ---------------------------onload------------------------ //
window.onload = () => {
// createNumButtons(1, 106);
//createNumButtons($('#now-page'), 106);
    getOrder(); 
    loadByStatus();
// document.getElementById('search-form').reset();
};