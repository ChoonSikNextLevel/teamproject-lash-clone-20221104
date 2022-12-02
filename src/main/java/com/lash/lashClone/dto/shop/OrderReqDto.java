package com.lash.lashClone.dto.shop;

import com.lash.lashClone.domain.Cart;
import lombok.Builder;
import lombok.Data;

import java.util.List;

@Builder
@Data
public class OrderReqDto {

    private String order_id;
    private List<Cart> orderItems;

    private String orderer;
    private String or_mobile_phone;
    private String or_address;
    private String or_address_detail;
    private String or_address_number;
    private String or_email;

    private String recipient;
    private String re_mobile_phone;
    private String re_address;
    private String re_address_detail;
    private String re_address_number;

    private String message;
}
