package com.lash.lashClone.domain;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Order {

    private int order_id;
    private int product_id;
    private int qty;
    private int member_id;
    private int address_id;
    private String status;
    private LocalDateTime order_date;
    private LocalDateTime status_date;

}
