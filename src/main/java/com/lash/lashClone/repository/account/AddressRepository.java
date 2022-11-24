package com.lash.lashClone.repository.account;

import com.lash.lashClone.domain.Address;
import com.lash.lashClone.domain.Member;
import com.lash.lashClone.domain.Product;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;
import java.util.Map;

@Mapper
public interface AddressRepository {
        public int save(Address address);
        public List<Address> addressList(Map<String, Object> map) throws Exception;


}
