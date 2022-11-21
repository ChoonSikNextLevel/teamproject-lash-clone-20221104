package com.lash.lashClone.service;

import com.lash.lashClone.domain.ProductCollection;
import com.lash.lashClone.domain.ProductDetail;

import java.util.List;

public interface ShopService {

    public List<ProductCollection> getProductCollection(String category) throws Exception;

    public List<ProductDetail> getProductDetail(String name, String colorCode) throws Exception;
    public List<ProductDetail> otherColor(List<ProductDetail> productDetailList, String colorCode) throws Exception;

}
