package com.lash.lashClone.service.admin;

import com.lash.lashClone.dto.admin.ProductRegistReqDto;

public interface ProductService {

    public boolean addProduct(ProductRegistReqDto productRegistReqDto) throws Exception;
}
