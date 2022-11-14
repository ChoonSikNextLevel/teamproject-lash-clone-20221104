package com.lash.lashClone.service.admin;

import com.lash.lashClone.domain.Product;
import com.lash.lashClone.dto.admin.ProductRegistReqDto;
import com.lash.lashClone.repository.admin.ProductRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ProductServiceImpl implements ProductService {

    private final ProductRepository productRepository;

    @Override
    public boolean addProduct(ProductRegistReqDto productRegistReqDto) throws Exception {

        int result = 0;

        Product product = productRegistReqDto.toProduct();
        result = productRepository.saveProduct(product);

        if(result == 0) {
            return false;
        }

        return true;
    }
}
