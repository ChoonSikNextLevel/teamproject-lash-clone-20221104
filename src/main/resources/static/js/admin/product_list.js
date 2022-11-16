

function productList() {
    $.ajax({
        async: false,
        type: "get",
        url: "/api/admin/products",
        
        // data에 들어갈 항목은?
        data: ,
        dataType: "json",
        success: (response) => {
            alert("상품 리스트 불러오기 성공")
            responseData = response.data;
        },
        error: (error) => {
            alert("상품 리스트 불러오기 실패")
            console.log(error);
        }
    });

}