package com.lash.lashClone.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

// 제품 전체, 디테일 페이지 로딩

@RequestMapping("/products")
@Controller
public class ProductPageController {

    // 제품코드로 mapping 주소 새로 설정해야함
    @GetMapping("/all")
    public String loadProductAllPage() {
        return "page_product/product_all";
    }

    // 제품코드 뒤에 /detail로 넘어가야함
    @GetMapping("/product/{name}/{colorCode}")
    public String loadProductDetailPage(@PathVariable String name, @PathVariable String colorCode) {
        return "page_product/product_detail";
    }
}
