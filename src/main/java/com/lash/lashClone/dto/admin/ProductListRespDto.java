package com.lash.lashClone.dto.admin;

import com.lash.lashClone.domain.ProductImg;
import lombok.Builder;
import lombok.Data;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@Builder
@Data
public class ProductListRespDto {
    private int productId;
    private String category;
    private String name;
    private String colorCode;
    private String color;
    private int price;

    private String productFeatures;
    private String description;

    private List<MultipartFile> productImgs;

//    private int productTotalCount;

}
