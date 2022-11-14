package com.lash.lashClone.controller.admin.api;

import com.lash.lashClone.dto.CMRespDto;
import com.lash.lashClone.dto.admin.ProductRegistReqDto;
import com.lash.lashClone.service.admin.ProductService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("/api/admin/product")
@RestController
@RequiredArgsConstructor
public class ProductApi {

    private final ProductService productService;

    @PostMapping("/registration")
    public ResponseEntity<?> addProduct(ProductRegistReqDto productRegistReqDto) throws Exception {


        return ResponseEntity
                .created(null)
                .body(new CMRespDto<>(1, "success", productService.addProduct(productRegistReqDto)));

    }
}
