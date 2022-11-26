package com.lash.lashClone.service;

import com.lash.lashClone.domain.Address;
import com.lash.lashClone.dto.account.AddressListRespDto;
import com.lash.lashClone.dto.account.AddressReqDto;
import com.lash.lashClone.repository.account.AddressRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
@RequiredArgsConstructor
public class AddressServicelmpl implements AddressService {

    private final AddressRepository addressRepository;


    //상품등록
    @Override
    public boolean addAddress(AddressReqDto addressReqDto, String username) throws Exception {
        int result = 0;
        System.out.println(addressReqDto);
        Address address = addressReqDto.toAddress();
        System.out.println(Integer.valueOf(addressRepository.getMemberId(username).get("member_id").toString()));

        address.setMember_id(Integer.valueOf(addressRepository.getMemberId(username).get("member_id").toString()));
        System.out.println(address);
        result = addressRepository.save(address);

        if(result ==0) {
            return false;
        }
        return true;
    }

    @Override
    public List<AddressListRespDto> addressList(int page) throws Exception {
        Map<String, Object> paramsMap = new HashMap<String, Object>();
        paramsMap.put("page",page);

        List<AddressListRespDto> list = new ArrayList<AddressListRespDto>();

        addressRepository.addressList(paramsMap).forEach(address -> {
            list.add(address.addressListRespDto());
        });
        return list;
    }

    // 주소 삭제
//    @Override
//    public boolean deleteAddress(int addressId) throws Exception {
//
//        String addressId = AdressRepository.getAddressId;
//
//        if(productRepository.deleteProduct(productId) > 0) {
//            productImgs.forEach(productImg -> {
//                Path uploadPath = Paths.get(filePath + "/product/" + productImg.getImg_name());
//
//                File file = new File(uploadPath.toUri());
//                if(file.exists()) {
//                    file.delete();
//                }
//            });
//            return true;
//        }
//        return false;
//    }
//


}

