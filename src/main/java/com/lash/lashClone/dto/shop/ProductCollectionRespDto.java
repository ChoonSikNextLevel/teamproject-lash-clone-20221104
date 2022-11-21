package com.lash.lashClone.dto.shop;

import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class ProductCollectionRespDto {

    private int productId;
    private String category;
    private String name;
    private String colorCode;
    private String color;
    private int price;
    private String imgName;
//    private int productTotalCount;

}
