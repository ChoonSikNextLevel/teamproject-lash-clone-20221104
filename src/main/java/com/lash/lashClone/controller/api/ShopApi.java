package com.lash.lashClone.controller.api;

import com.lash.lashClone.dto.CMRespDto;
import com.lash.lashClone.service.OrderService;
import com.lash.lashClone.service.OrderServiceImpl;
import com.lash.lashClone.service.ShopServiceImpl;
import com.lash.lashClone.service.auth.PrincipalDetails;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
public class ShopApi {

    private final ShopServiceImpl shopService;
    private final OrderServiceImpl orderService;

    @GetMapping("/collection/{category}")
    public ResponseEntity<?> loadProductCollection(@PathVariable String category) throws Exception {

        return ResponseEntity.ok(new CMRespDto<>(1, "get collection", shopService.getProductCollection(category)));
    }


    @GetMapping("/product/{name}/{colorCode}")
    public ResponseEntity<?> loadProductDetail(@PathVariable String name, @PathVariable String colorCode) throws Exception {

        return ResponseEntity.ok(new CMRespDto<>(1, "get product", shopService.getProductDetail(name, colorCode)));
    }

    @GetMapping("/order/member/info")
    public ResponseEntity<?> loadOrderMemberInfo(Principal principalDetails) {

        System.out.println("이름:" + principalDetails.getName());

        return ResponseEntity.ok(new CMRespDto<>(1, "user information", orderService.getOrderUser(principalDetails.getName())));
    }
}
