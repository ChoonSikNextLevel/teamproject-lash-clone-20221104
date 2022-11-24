package com.lash.lashClone.service;

import com.lash.lashClone.dto.shop.IMPInfoRespDto;
import com.lash.lashClone.repository.shop.OrderRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class OrderServiceImpl implements OrderService{

    private final OrderRepository orderRepository;

    @Override
    public IMPInfoRespDto getOrderUser(String username) {

        return orderRepository.getOrderUser(username).toImpInfoRespDto();
    }


}
