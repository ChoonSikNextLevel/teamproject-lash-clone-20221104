package com.lash.lashClone.repository.shop;

import com.lash.lashClone.domain.IMPInfo;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface OrderRepository {

        public IMPInfo getOrderUser(String username);

}
