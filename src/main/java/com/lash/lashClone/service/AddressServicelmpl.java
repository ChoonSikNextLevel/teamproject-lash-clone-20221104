package com.lash.lashClone.service;

import com.lash.lashClone.domain.Address;
import com.lash.lashClone.dto.account.AddressReqDto;
import com.lash.lashClone.repository.account.AddressRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AddressServicelmpl implements AddressService {

    private final AddressRepository addressRepository;
    
    //상품등록
    @Override
    public boolean Addaddress(AddressReqDto addressReqDto) throws Exception {
        int result = 0;
        System.out.println( addressReqDto);
        Address address = addressReqDto.toAddress();
        System.out.println(address);
        result = addressRepository.save(address);

        if(result ==0) {
            return false;
        }
        return true;
    }
}
