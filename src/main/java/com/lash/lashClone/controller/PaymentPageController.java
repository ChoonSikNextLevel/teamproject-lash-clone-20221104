package com.lash.lashClone.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

//   쇼핑백, 결제창

@Controller
public class PaymentPageController {

    @GetMapping("/shopping-basket")
    public String loadShoppingBasketPage() {
        return "mypage/MyShoppingBasket";
    }
}
