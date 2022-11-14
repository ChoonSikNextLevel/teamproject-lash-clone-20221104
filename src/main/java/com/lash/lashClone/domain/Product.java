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
public class Product {
    private int product_id;
    private String category;
    private String name;
    private String color_code;
    private String color;
    private int price;
    private String product_features;
    private String description;
    private LocalDateTime create_date;
    private LocalDateTime update_date;

}
