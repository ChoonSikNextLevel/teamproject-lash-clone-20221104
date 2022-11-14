package com.lash.lashClone.service.admin;

import com.lash.lashClone.dto.admin.ProductRegistReqDto;
import org.springframework.stereotype.Service;

@Service
public class ProductServiceImpl implements ProductService {

    @Override
    public boolean addProduct(ProductRegistReqDto productRegistReqDto) throws Exception {

        System.out.println("출력 성공!");
        return true;
    }
}
