package com.lash.lashClone.service;

import com.lash.lashClone.domain.ProductDetail;
import com.lash.lashClone.dto.shop.ProductCollectionRespDto;
import com.lash.lashClone.repository.shop.ShopRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
@RequiredArgsConstructor
public class ShopServiceImpl implements ShopService {

    private final ShopRepository shopRepository;


    @Override
    public List<ProductCollectionRespDto> getProductCollection(String category) throws Exception {

//        List<ProductCollectionRespDto> collection = new ArrayList<ProductCollectionRespDto>();

        return shopRepository.getProductCollection(category);
    }



    @Override
    public List<ProductDetail> getProductDetail(String name, String colorCode) throws Exception {

        System.out.println("밍");
        return shopRepository.getProduct(name);
    }



    
    @Override
    public List<ProductDetail> otherColor(List<ProductDetail> productDetailList, String colorCode) throws Exception {

        for(int i = 0; i < productDetailList.size(); i++) {
            ProductDetail productDetail = productDetailList.get(i);

            if(productDetail.getColor_code() != colorCode) {


            }
        }

        return null;
    }


}
