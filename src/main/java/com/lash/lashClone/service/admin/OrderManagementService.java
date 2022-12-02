package com.lash.lashClone.service.admin;

import com.lash.lashClone.domain.Order;

import java.util.List;

public interface OrderManagementService {

    public List<Order> getOrder(Order order) throws Exception;

}
