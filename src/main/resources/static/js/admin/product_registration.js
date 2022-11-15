const registButton = document.querySelector(".registration-button");

registButton.onclick = () => {

    let productImgs = document.getElementById("product-imgs");
    console.log(productImgs);

    let files = productImgs.files;
    let file;

    for(let i = 0; i < files.length; i++) {

        file = files[i];
        alert(file.name);
    }

};

