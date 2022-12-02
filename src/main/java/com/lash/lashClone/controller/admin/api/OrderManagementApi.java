package com.lash.lashClone.controller.admin.api;

import com.lash.lashClone.domain.Order;
import com.lash.lashClone.dto.CMRespDto;
import com.lash.lashClone.service.admin.OrderManagementServiceImpl;
import com.lash.lashClone.service.auth.PrincipalDetails;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("/api/admin")
@RestController
@RequiredArgsConstructor
public class OrderManagementApi {

    private final OrderManagementServiceImpl orderManagementService;

    @GetMapping("/orderManagement")
    public ResponseEntity<?> getOrderList(Order order) throws Exception {

        return ResponseEntity.ok().body(new CMRespDto<>(1, "success", orderManagementService.getOrder(order)));
    }


}
