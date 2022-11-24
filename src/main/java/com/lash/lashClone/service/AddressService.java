package com.lash.lashClone.service;


import com.lash.lashClone.dto.account.AddressListRespDto;
import com.lash.lashClone.dto.account.AddressReqDto;


import java.util.List;

public interface AddressService {
    // 배송지 등록 등록
    public boolean Addaddress(AddressReqDto addressReqDto) throws Exception;

    // 상품 삭제
    public List<AddressListRespDto> addrssList(int page) throws Exception;
}

