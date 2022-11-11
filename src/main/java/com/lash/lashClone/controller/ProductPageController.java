package com.lash.lashClone.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

// 제품 전체, 디테일 페이지 로딩

@RequestMapping("/product")
@Controller
public class ProductPageController {

    @GetMapping("/all")
    public String loadProductAllPage() {
        return "page_product/product_all";
    }
}
