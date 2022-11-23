class ElementService {
    static #instance = null;
    #productDtl = null;

    static getInstance() {
        if(this.#instance == null) {
            this.#instance = new ElementService();
        }
        return this.#instance;
    }

    createAddressbook(responseData) {
        const xans_record = document.querySelector(".xans-record-");

        xans_record.innerHTML = "";

        responseData.forEach((product) => {
            xans_record.innerHTML += `
            <tr>
                <td class="product-id">
                    input name="ma_idx[]" value="717" type="checkbox">${product.id}
                </td>
                <td>${product.category}</td>
                <td>${product.name}</td>
                <td>${product.price}<span>원</span></td>
                <td>${product.color}</td>
                <td>${product.size}</td>
                <td><button type="button" class="list-button detail-button"><i class="fa-regular fa-file-lines"></i></button></td>
                <td><button type="button" class="list-button delete-button"><i class="fa-regular fa-trash-can"></i></button></td>
            </tr>
            <tr class="product-detail detail-invisible">
                
            </tr>
            `;
        });

        this.addProductMstEvent(responseData);
    }
}