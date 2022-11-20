package com.lash.lashClone.repository.shop;

import com.lash.lashClone.domain.ProductDetail;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface ShopRepository {


    public List<ProductDetail> getProduct(String name) throws Exception;
}
