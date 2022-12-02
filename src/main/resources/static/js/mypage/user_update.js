function load() {
    $.ajax({
        async:false,
        type:"get",
        url: "/api/account/user",
        dataType: "json",
        success: (response) => {
            responseData = response.data;
            loadUser(responseData);
            updateButtonClickEvent();
        },
        error: (error) => {
            alert("유저정보 불러오기 실패");
            console.log(error);
        }
    });
}

function loadUser(responseData) {
    console.log(responseData);
    const userBody = document.querySelectorAll(".inputTypeText")
    if(responseData.provider != null) {
        userBody[0].value = responseData.username;
        userBody[1].setAttribute("disabled", true);
        userBody[2].setAttribute("disabled", true);
        userBody[7].setAttribute("disabled", true);

        userBody[3].value = responseData.name;
        if(responseData.phone != null) {
            const phones = responseData.phone;
            userBody[5].value = phones.substring(3,7);
            userBody[6].value = phones.substring(7,11);
        }
        else {
            userBody[5].value = "";
            userBody[6].value = "";
        }
        userBody[7].value = responseData.email;

    }else{
        userBody[0].value = responseData.username;

        userBody[3].value = responseData.name;
        if(responseData.phone != null) {
            const phones = responseData.phone;
            userBody[5].value = phones.substring(3,7);
            userBody[6].value = phones.substring(7,11);
        }
        else {
            userBody[5].value = "";
            userBody[6].value = "";
        }
        userBody[7].value = responseData.email;
    }
   
}
function updateButtonClickEvent() {
    const userButton = document.querySelector(".updateBtn");
    userButton.onclick = () => {
        updateUser();
    }
}
function updateUser() {
    const userInput = document.querySelectorAll(".inputTypeText");
    let userData = {}
    userData.firstPhone = userInput[5].value,
    userData.lastPhone= userInput[6].value,
    userData.password = userInput[2].value,
    userData.email = userInput[7].value
    console.log(userData)
    
    $.ajax({
        async: false,
        type: "put",
        url: "/api/account/user/update",
        contentType: "application/json",
        data: JSON.stringify(userData),
        dataType: "json",
        success: (response) => {
          alert("유저정보 수정 완료");
          history.back();
        },
        error: (error) => {
          alert("유저정보 수정 실패");
          console.log(error);
        },
      });

    
}

window.onload = () => {
    load();
};
  
  
