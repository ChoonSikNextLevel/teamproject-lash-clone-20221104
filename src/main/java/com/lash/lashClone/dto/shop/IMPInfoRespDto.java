package com.lash.lashClone.dto.shop;

import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class IMPInfoRespDto {

    private int memberId;
    private String email;
    private String name;
    private String phone;
    private String address;
    private String addressNumber; // 우편번호

}
