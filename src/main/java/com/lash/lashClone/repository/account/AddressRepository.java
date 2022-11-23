package com.lash.lashClone.repository.account;

import com.lash.lashClone.domain.Address;
import com.lash.lashClone.domain.Member;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface AddressRepository {
        public int save(Address address);

}
