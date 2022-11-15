const registButton = document.querySelector(".registration-button");
const nameUl = document.querySelector(".uploaded_files_name");
const fileUl = document.querySelector(".cvf_uploaded_files");

let productImgsArray;

registButton.onclick = () => {

    let productForm = new FormData();
    let productImgs = document.getElementById("product-imgs");

    productForm.append("category", "COMBINATION");
	productForm.append("name", "HUNTER");
	productForm.append("colorCode", "C2"); // color_code 로 쓰면 못 알아 봄 !! dto에 있는 이름 대로 . . 
	productForm.append("color", "BROWN");
    productForm.append("price", 245000);
	productForm.append("productImgs", productImgsArray);

    console.log(productForm);


    let files = productImgs.files;
    let file;

    //console.log(files);
    productImgsArray = Array.from(files);
    //console.log(productImgsArray);

    nameUl.innerHTML = ``;
    fileUl.innerHTML = ``;

    for(let i = 0; i < files.length; i++) {

        file = files[i];
        
        // nameUl.innerHTML += `
        //         <li style="background-color: #b7d5bb; border: 1px solid gray; margin: 2px 0; border-radius: 2px; width: 50%;">
        //             선택된 파일[${i}]: ${file.name}
        //         </li>
        // `;

        /* img 불러오기 */
        const reader = new FileReader();

        reader.onload = (e) => {
            fileUl.innerHTML += `
                <li><img class="product-img" src="${e.target.result}" style="width: 140px; height: 140px;"></li>
            `;
        }

        setTimeout(() => {reader.readAsDataURL(file)}, i * 100);

        console.log(file.name);
        console.log(productImgsArray[i]);

    }

    addProduct(productForm);
    alert("동작완료");
};


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

