package com.lash.lashClone.repository.shop;

import org.apache.ibatis.annotations.MapKey;
import org.apache.ibatis.annotations.Mapper;

import java.util.Map;

@Mapper
public interface OrderRepository {

        public Map<String, Object> getOrderUser(String username);

}
