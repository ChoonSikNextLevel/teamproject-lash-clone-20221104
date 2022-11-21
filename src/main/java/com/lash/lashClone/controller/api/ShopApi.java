package com.lash.lashClone.controller.api;

import com.lash.lashClone.dto.CMRespDto;
import com.lash.lashClone.service.ShopServiceImpl;
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

    private final ShopServiceImpl shopService;

    @GetMapping("/collection/{category}")
    public ResponseEntity<?> loadProductCollection(@PathVariable String category) throws Exception {

        return ResponseEntity.ok(new CMRespDto<>(1, "get collection", shopService.getProductCollection(category)));
    }


    @GetMapping("/product/{name}/{colorCode}")
    public ResponseEntity<?> loadProductDetail(@PathVariable String name, @PathVariable String colorCode) throws Exception {

        return ResponseEntity.ok(new CMRespDto<>(1, "get product", shopService.getProductDetail(name, colorCode)));
    }
}
