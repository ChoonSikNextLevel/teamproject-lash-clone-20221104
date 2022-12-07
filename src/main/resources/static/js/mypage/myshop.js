function addMyshop() {
    $.ajax({
        async:false,
        type: "get",
        url: "/api/account/mypage",
        dataType: "json",
        success: (response) => {
            responseData = response.data;
            loadList(responseData);
            // console.log(response.data[0].name)
        },
        error: (error) => {
            alert("이름 가져오기 실패");
            console.log(error);
        }
    });
    
}

function loadList(responseData) {
    console.log(responseData)
    const myPageBody = document.querySelector(".memberMent");
    myPageBody.innerHTML+=`
    <p class="welcome">
        <span class="member-var-name">${responseData.name}</span> 고객님, 환영합니다. <br>
    </p>
    <p class="grade">회원 님은 
        <strong>
            [<span class="member-group_name">일반회원</span>]
        </strong>
            회원이십니다.
    </p>
    `;
}


function loadOrder() {
    $.ajax({
        async: false,
        type: "get",
        url: "/api/account/mypage/count",
        dataType: "json",
        success: (response) => {
            console.log(response.data);
        },
        error: (error) => {
            console.log(error);
        }
    })
}

let orderCount = {
    shipped_before :"", 
    shipped_begin : "",
    shipped_after : ""
}



window.onload = () => {
    addMyshop();
    loadOrder();
};