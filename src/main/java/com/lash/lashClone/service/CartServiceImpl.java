package com.lash.lashClone.service;

import com.lash.lashClone.domain.Cart;
import com.lash.lashClone.dto.shop.OrderReqDto;
import com.lash.lashClone.repository.CartRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
@RequiredArgsConstructor
public class CartServiceImpl implements CartService {

    private final CartRepository cartRepository;

    @Override
    public List<Cart> getCart(String username) throws Exception{

        return cartRepository.getCart(username);
    }

    @Override
    public int deleteCart(String username, String name, String colorCode) throws Exception {

        Map<String, String> map = new HashMap<String, String>();

        map.put("username", username);
        map.put("name", name);
        map.put("colorCode", colorCode);

        return cartRepository.deleteCart(map);
    }

    @Override
    public int plusCount(String username, String name, String colorCode, int productCount) throws Exception {

        Map<String, Object> map = new HashMap<String, Object>();

        map.put("username", username);
        map.put("name", name);
        map.put("colorCode", colorCode);
        map.put("productCount", productCount);

        return cartRepository.plusCount(map);

    }

    @Override
    public int minusCount(String username, String name, String colorCode, int productCount) throws Exception {

        Map<String, Object> map = new HashMap<String, Object>();

        map.put("username", username);
        map.put("name", name);
        map.put("colorCode", colorCode);
        map.put("productCount", productCount);


        return cartRepository.minusCount(map);
    }

    @Override
    public int order(OrderReqDto orderReqDto) throws Exception {

        List<Cart> cartList = orderReqDto.getOrderItems();
        System.out.println(cartList);
        System.out.println(orderReqDto);


        return 0;
    }


}
