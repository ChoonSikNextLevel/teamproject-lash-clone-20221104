package com.lash.lashClone.controller.admin.api;

import com.lash.lashClone.dto.CMRespDto;
import com.lash.lashClone.dto.admin.ProductRegistReqDto;
import com.lash.lashClone.service.admin.ProductService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("/api/admin")
@RestController
@RequiredArgsConstructor
public class ProductApi {

    private final ProductService productService;


    // 상품 등록
    @PostMapping("/product/registration")
    public ResponseEntity<?> addProduct(ProductRegistReqDto productRegistReqDto) throws Exception {


        return ResponseEntity
                .created(null)
                .body(new CMRespDto<>(1, "success", productService.addProduct(productRegistReqDto)));

    }

    // 상품 조회(리스트)
    @GetMapping("/products")
    public ResponseEntity<?> productList() throws Exception {

        return ResponseEntity.ok(new CMRespDto<>(1, "success", productService.getProductList()));
    }

    // 상품 정보 수정


    // 상품 삭제




}
