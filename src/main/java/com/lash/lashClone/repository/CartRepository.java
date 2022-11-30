package com.lash.lashClone.repository;

import com.lash.lashClone.domain.Cart;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;
import java.util.Map;

@Mapper
public interface CartRepository {

    public List<Cart> getCart(String username) throws Exception;

    public int deleteCart(Map<String, String> map) throws Exception;

    public int plusCount(Map<String, Object> map) throws Exception;

    public int minusCount(Map<String, Object> map) throws Exception;
}
