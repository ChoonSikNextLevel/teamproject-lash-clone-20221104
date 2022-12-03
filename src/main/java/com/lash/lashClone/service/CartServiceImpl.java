package com.lash.lashClone.service;

import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.lash.lashClone.domain.Cart;
import com.lash.lashClone.domain.OrderVo;
import com.lash.lashClone.dto.shop.OrderReqDto;
import com.lash.lashClone.repository.CartRepository;
import lombok.RequiredArgsConstructor;
import net.minidev.json.JSONArray;
import net.minidev.json.JSONObject;
import net.minidev.json.parser.JSONParser;
import org.springframework.stereotype.Service;

import java.io.DataInput;
import java.io.IOException;
import java.util.ArrayList;
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

        OrderVo orderVo = orderReqDto.orderVo();

        JSONParser parser = new JSONParser();
        JSONArray arr = (JSONArray) parser.parse(orderReqDto.getOrderItems());

        List<Cart> cartList = new ArrayList<Cart>();
        ObjectMapper mapper = new ObjectMapper();

        arr.forEach((item)->{
            JSONObject json = (JSONObject) item;

            System.out.println("\n"+json.get("name") + " " + json.get("color_code") + " -> " + json.get("product_id"));
            System.out.println(json.get("product_count"));
            System.out.println(json.get("member_id"));

            try {
                Cart cart = mapper.readValue(json.toString(), Cart.class);
                System.out.println(cart);
                cartList.add(cart);
            } catch (IOException e) {
                throw new RuntimeException(e);
            }
        });

        System.out.println(cartList);
        orderVo.setOrderItems(cartList);


        return cartRepository.orderInfo(orderVo);
    }


}
