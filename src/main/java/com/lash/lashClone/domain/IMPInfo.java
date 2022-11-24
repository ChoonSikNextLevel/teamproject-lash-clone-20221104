package com.lash.lashClone.domain;

import com.lash.lashClone.dto.shop.IMPInfoRespDto;
import com.lash.lashClone.dto.shop.ProductCollectionRespDto;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
public class IMPInfo {

    private int memberId;
    private String email;
    private String name;
    private String address;
    private String addressDetail;
    private String addressNumber;


    public IMPInfoRespDto toImpInfoRespDto() {
        return  IMPInfoRespDto.builder()
                .memberId(memberId)
                .email(email)
                .name(name)
                .address(address + " " + addressDetail)
                .addressNumber(addressNumber)
                .build();
    }
}
