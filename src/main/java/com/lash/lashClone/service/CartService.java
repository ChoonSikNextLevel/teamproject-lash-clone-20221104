package com.lash.lashClone.service;

import com.lash.lashClone.domain.Cart;

import java.util.List;

public interface CartService {

    public List<Cart> getCart(String username) throws Exception;

    public int deleteCart(String username, String name, String colorCode) throws Exception;

    public int plusCount(String username, String name, String colorCode, int productCount) throws Exception;

    public int minusCount(String username, String name, String colorCode, int productCount) throws Exception;
}
