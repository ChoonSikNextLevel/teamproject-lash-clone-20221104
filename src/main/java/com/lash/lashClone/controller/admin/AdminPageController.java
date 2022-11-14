package com.lash.lashClone.controller.admin;


import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@RequestMapping("/admim/product")
@Controller
public class AdminPageController {

    @GetMapping("/registration")
    public String registration() {
        return "admin/product_registration";
    }




}
