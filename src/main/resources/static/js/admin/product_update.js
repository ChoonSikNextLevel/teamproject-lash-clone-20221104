

function updateProduct(formData) {

    // 수정 전 기존 데이터 불러오기
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
        },
        error: (error) => {
            alert("상품 리스트 불러오기 실패")
            console.log(error);
        }
    });


    // 수정 후 등록 시 아래 데이터 전송(post)
    $.ajax({
        async: false,
        type: "post",
        url: "/api/admin/product/update",
        enctype: "multipart/form-data",
        contentType: false,
        processData: false,
        data: formData,
        dataType: "json",
        success: (response) => {
            alert("상품 수정 완료");
            location.reload();
        },
        error: (error) => {
            alert("상품 수정 실패");
            console.log(error);
        }
    });





}









window.onload = () => {
    // productList();
}