package com.lash.lashClone.repository.admin;

import com.lash.lashClone.domain.Product;
import com.lash.lashClone.domain.ProductImg;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface ProductRepository {
    public int saveProduct(Product product) throws Exception;

    public int saveImgs(List<ProductImg> product_imgs) throws Exception;

}
