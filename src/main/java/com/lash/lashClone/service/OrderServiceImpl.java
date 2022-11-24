package com.lash.lashClone.service;

import com.lash.lashClone.domain.IMPInfo;
import com.lash.lashClone.dto.shop.IMPInfoRespDto;
import com.lash.lashClone.repository.shop.OrderRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class OrderServiceImpl implements OrderService{

    private final OrderRepository orderRepository;

    @Override
    public List<IMPInfoRespDto> getOrderUser(String username) {
        List<IMPInfoRespDto> list = new ArrayList<>();

        orderRepository.getOrderUser(username).forEach(i ->
                list.add(i.toImpInfoRespDto()));

        return list;
    }


}
