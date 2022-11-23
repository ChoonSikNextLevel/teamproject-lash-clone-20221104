package com.lash.lashClone.service;


import com.lash.lashClone.dto.account.AddressReqDto;

public interface AddressService {
    // 배송지 등록 등록
    public boolean Addaddress(AddressReqDto addressReqDto) throws Exception;
}
