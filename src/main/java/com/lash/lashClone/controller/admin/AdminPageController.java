package com.lash.lashClone.controller.admin;


import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@RequestMapping("/admin")
@Controller
public class AdminPageController {

    @GetMapping("/product/registration")
    public String registration() {
        return "admin/managerpage/product_registration";
    }

    @GetMapping("/products")
    public String productList() {
        return "admin/managerpage/product_list";
    }

}
