package com.lash.lashClone.controller.api;

import com.lash.lashClone.dto.CMRespDto;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
public class ShopApi {


    @GetMapping("/product/{name}/{colorCode}/{productId}")
    public ResponseEntity<?> loadProductDetail(@PathVariable int productId, @PathVariable String name, @PathVariable String colorCode) throws Exception {

        return ResponseEntity.ok(new CMRespDto<>(1, "get product", null));
    }


}
