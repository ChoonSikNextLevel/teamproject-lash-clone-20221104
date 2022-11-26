package com.lash.lashClone.repository.shop;

import org.apache.ibatis.annotations.MapKey;
import org.apache.ibatis.annotations.Mapper;

import java.util.Map;

@Mapper
public interface OrderRepository {

        @MapKey("member_id")
        public Map<String, Object> getOrderUser(String username);

}
