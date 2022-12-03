package com.lash.lashClone.domain;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Order {
    private int member_id;

    private String order_id;
    private int product_id;
    private String name;
    private String color_code;
    private int price;
    private int product_count;
    private int address_id;
    private String re_address;
    private String re_address_detail;

    private String status;

    private LocalDate order_date;
}
