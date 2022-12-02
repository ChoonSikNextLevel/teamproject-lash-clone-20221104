package com.lash.lashClone.service.admin;

import com.lash.lashClone.domain.Order;
import com.lash.lashClone.repository.admin.OrderManagementRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class OrderManagementServiceImpl implements OrderManagementService{

    private final OrderManagementRepository orderManagementRepository;

    @Override
    public List<Order> getOrder(Order order) throws Exception {

        return orderManagementRepository.getOrder(order);
    }
}
