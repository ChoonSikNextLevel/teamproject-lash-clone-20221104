package com.lash.lashClone.repository.admin;

import com.lash.lashClone.domain.Order;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface OrderManagementRepository {


    public List<Order> getOrder(Order order);
}
