package com.lash.lashClone.service;

import com.lash.lashClone.domain.ProductDetail;
import com.lash.lashClone.repository.shop.ShopRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ShopServiceImpl implements ShopService {

    private final ShopRepository shopRepository;

    @Override
    public List<ProductDetail> getProductDetail(int productId, String name, String colorCode) throws Exception {

        shopRepository.getProduct(name);


        return null;
    }
}
