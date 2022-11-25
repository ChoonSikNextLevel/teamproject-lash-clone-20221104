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

  $("#history_start_date, #history_end_date").datepicker("setDate", "-1M");
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

/*----------- paging --------------*/

let nowPageUrl = window.location.href;

let nowPage = 1; // 현재 페이지
let productTotalCount = 106; // 제품 106개가 등록되어 있음

const paginationLimit = 1; // 한 페이지에 15 개의 데이터 띄워줄 것
let endPage = Math.ceil(productTotalCount / paginationLimit);

const pageButtons = document.querySelector(".page-buttons"); // 만든 page numbers 넣어줄 ol 영역
pageButtons.innerHTML = "";

const orderList = document.querySelector(".order-list"); // 가져온 데이터 넣어줄 테이블
const trItems = document.querySelector(".tr"); // table에 가져온 items 들

function createNumButtons(nowPage, productTotalCount) {
  // 3페이지 면 1 ~ 5 / 6페이지면 6 ~ 10 버튼을 보여줘야함
  // nowPage 가 5의 배수가 아닐 때는 나머지가 생김
  // 나머지를 빼주면(-) 5의 배수 -> 거기서 + 1 을 해서 start index 구해줌
  let startIndex = nowPage % 5 == 0 ? nowPage - 4 : nowPage - (nowPage % 5) + 1; // 6
  let endIndex = startIndex + 4 <= endPage ? startIndex + 4 : endPage; // 10

  for (let i = startIndex; i <= endIndex; i++) {
    if (i == nowPage) {
      pageButtons.innerHTML += `<li class="now-page"><a href="javascript:void(0)" class="this">${i}</a></li>`;
    } else {
      pageButtons.innerHTML += `<li><a href="javascript:void(0)">${i}</a></li>`;
    }
  }
}

const firstBtn = document.querySelector("first");
const prevBtn = document.querySelector("prev");
const nextBtn = document.querySelector("next");
const lastBtn = document.querySelector("last");

window.onload = () => {
  createNumButtons(1, 106);
  //createNumButtons($('#now-page'), 106);
};

/**-----------------------------------------*/
