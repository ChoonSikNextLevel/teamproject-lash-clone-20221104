

// << 상품 등록 >> 기능

// product_mst 에 넣어줄 정보를 상품 등록 페이지에서 가져와야 함. 
// -> '등록' btn click 시  api(controller)로 ajax 전송 // api 로 받아올 때 dto 로 가공 . . .

// service layer : 	
// 					addProduct() ; productRepository 객체를 가져와서 쿼리 실행
								// dto로 받아온 정보를 db에 넣을 수 있게 
								// product 객체로 만들어서 db insert(productRepository.saveProduct)

// db 와 연결해줄 productRepository, -> mybatis로 db 연결 (mappers)
// 			- saveProduct
// 			- saveProductImgs



const registrationBtn = document.querySelector(".registration-button");

registrationBtn.onclick = () => {
	// const productInputs = document.querySelectorAll(".product-input");
	
	let productForm = new FormData();
	
	productForm.append("category", "COMBINATION");
	productForm.append("name", "HUNTER");
	productForm.append("colorCode", "C2"); // color_code 로 쓰면 못 알아 봄 !! dto에 있는 이름 대로 . . 
	productForm.append("color", "BROWN");
    productForm.append("price", 245000);
	productForm.append("productImgs", productImgsArray);

    console.log(productForm);
	
	addProduct(productForm);
}

function addProduct(productForm) {
	$.ajax({
			async: false,
			type: "post",
			url: "/api/admin/product/registration",
			
			enctype: "multipart/form-data",
			contentType: false,
			processData: false,
			
			data: productForm,
			dataType: "json",
			success: (response) => {
				alert("상품 등록 완료");
			},
			error: (error) => {
				alert("상품 등록 실패");
				console.log(error);
			}
		
	});
}