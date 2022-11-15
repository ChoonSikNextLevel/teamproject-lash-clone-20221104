package com.lash.lashClone.controller.admin;


import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@RequestMapping("/admin/product")
@Controller
public class AdminPageController {

    @GetMapping("/registration")
    public String registration() {
        return "admin/managerpage/product_registration copy";
    }




}
