package com.lash.lashClone.dto.account;

import lombok.Builder;
import lombok.Data;

import java.time.LocalDate;

@Builder
@Data
public class MyPageOrderRespDto {
    private LocalDate order_date;
    private int member_id;
    private String order_id;
    private int product_id;
    private int product_count;
    private String status;
    private String name;
    private String color_code;
    private int price;
}
