const textInputs = document.querySelectorAll("inputTypeText");
const addButton = document.querySelector(".add-button");

addButton.onclick =()=> {
    let addInfo = {
        // username: joinInputs[0].value,
        address_name: textInputs[0].value,
        recipient: textInputs[1].value,
        address: textInputs[2].value,
        address_detail: textInputs[3].value,
        first_land_phone: textInputs[4].value,
        middle_land_phone: textInputs[5].value,
        last_land_phone: textInputs[6].value,
        first_mobile_phone: textInputs[7].value,
        middle_mobile_phone: textInputs[8].value,
        last_mobile_phone: textInputs[9].value,
        Address: textInputs[10].value,
        address_detail: textInputs[11].value
    }   
    $.ajax({
        async: false,
        type: "post",
        url: "/api/account/shipping-address-registration",
        enctype: "multipart/form-data",
        contentType: false,
        processData: false,
        data: formData,
        dataType: "json",
        success: (response) => {
            alert("배송지 등록 완료");
            location.replace("/account/shipping-address");
        },
        error: (error) => {
            alert("배송지 등록 실패");
            console.log(error);
        }
    });
}
    
    
    // formData.append("category", productInputs[0].value);
    // frmain.append("address_name", ma_rcv_title.value);
    // frmain.append("recipient", ma_rcv_name.value);
    // frmain.append("address", address_addr1.value);
    // frmain.append("address_detail", address_addr2.value);
    // frmain.append("land_phone",ma_rcv_mobile_no1.value);
    // frmain.append("land_phone",ma_rcv_mobile_no2.value);
    // frmain.append("land_phone",ma_rcv_mobile_no3.value);
    // frmain.append("mobile_phone",ma_rcv_mobile_no1.vlaue);
    // frmain.append("mobile_phone",ma_rcv_mobile_no2.vlaue);
    // frmain.append("mobile_phone",ma_rcv_mobile_no3.vlaue);