package com.lash.lashClone.repository.shop;

import com.lash.lashClone.domain.IMPInfo;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface OrderRepository {

        public List<IMPInfo> getOrderUser(String username);

}
