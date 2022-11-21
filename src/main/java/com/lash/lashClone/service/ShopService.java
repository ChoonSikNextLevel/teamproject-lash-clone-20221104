package com.lash.lashClone.service;

import com.lash.lashClone.domain.ProductDetail;

import java.util.List;

public interface ShopService {

    public List<ProductDetail> getProductDetail(int productId, String name, String colorCode) throws Exception;
    public List<ProductDetail> otherColor(List<ProductDetail> productDetailList, String colorCode) throws Exception;

}
