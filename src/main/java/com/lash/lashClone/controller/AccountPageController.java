package com.lash.lashClone.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

// 마이쇼핑, 주문내역조회, 회원정보관리, 배송주소록
// myshop, order, user-info, ship-address

// 로그인, 회원가입
// login, join

@Controller
@RequestMapping("/account")
public class AccountPageController {


    @GetMapping("/mypage")
    public String loadMyPage() {
        return "mypage/myshop";
    }

    @GetMapping("/order")
    public String loadOrderPage() {
        return "mypage/order";
    }

    @GetMapping("/user-info")
    public String loadUserInfoPage() {
        return "mypage/user_info_editor";
    }

    @GetMapping("/shipping-address")
    public String loadShippingAddressPage() {
        return "mypage/shipping_adress_book";
    }

    @GetMapping("/login")
    public String loadLoginPage() {
        return "login/login";
    }

    @GetMapping("/join")
    public String loadJoinPage() {
        return "login/join";
    }

}
