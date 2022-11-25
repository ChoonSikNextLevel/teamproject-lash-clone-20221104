package com.lash.lashClone.controller;

import com.lash.lashClone.domain.Address;
import com.lash.lashClone.domain.Member;
import com.lash.lashClone.dto.account.AddressReqDto;
import com.lash.lashClone.service.AccountService;
import com.lash.lashClone.service.AccountServiceImpl;
import com.lash.lashClone.service.auth.PrincipalDetails;
import org.springframework.lang.Nullable;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

// 마이쇼핑, 주문내역조회, 회원정보관리, 배송주소록
// myshop, order, user-info, ship-address

// 로그인, 회원가입
// login, join


@RequestMapping("/account/mypage")
@Controller
public class AccountPageController {


    @GetMapping("")
    public String loadMyPage() {
        return "mypage/myshop";
    }

    @GetMapping("/order")
    public String loadOrderPage() {
        return "mypage/order";
    }

    @GetMapping("/user")
    public String loadUserInfoPage() {
        return "mypage/user_info_editor";
    }

    @GetMapping("/address")
    public String loadShippingAddressPage() {
        return "mypage/shipping_address_book";
    }

    @GetMapping("/address/registration")
    public String loadShippingAddressRegistrationPage(Model model, AddressReqDto addressReqDto, @AuthenticationPrincipal PrincipalDetails principalDetails){
        model.addAttribute("address", addressReqDto);
        model.addAttribute("principalmember", principalDetails.getMember());
        return "mypage/shipping_address_registration";
    }

    @GetMapping("/login")
    public String login(Model model, @RequestParam @Nullable String error) {
        if(error != null){
            model.addAttribute("error", error.equals("auth") ? "이메일 또는 비밀번호가 잘못되었습니다." : "");
        }

        return "login/login";
    }

    @GetMapping("/join")
    public String loadJoinPage() {
        return "login/join";
    }
}
