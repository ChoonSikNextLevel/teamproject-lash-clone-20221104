package com.lash.lashClone.service.admin;

import com.lash.lashClone.domain.Product;
import com.lash.lashClone.domain.ProductImg;
import com.lash.lashClone.dto.admin.ProductListRespDto;
import com.lash.lashClone.dto.admin.ProductRegistReqDto;
import com.lash.lashClone.repository.admin.ProductRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
@RequiredArgsConstructor
public class ProductServiceImpl implements ProductService {

    @Value("${file.path}")
    private String filePath;
    private final ProductRepository productRepository;

    // 상품 등록
    @Override
    public boolean addProduct(ProductRegistReqDto productRegistReqDto) throws Exception {

        int result = 0;

        List<MultipartFile> files = productRegistReqDto.getProductImgs();
        List<ProductImg> productImgs = null;

        Product product = productRegistReqDto.toProduct();
        result = productRepository.saveProduct(product);

        if(files != null) {
            int productId = product.getProduct_id();
            productImgs = getProductImgs(files, productId);
            productRepository.saveImgs(productImgs);
        }

        if(result == 0) {
            return false;
        }

        return true;
    }


    // 상품 이미지 등록
    private List<ProductImg> getProductImgs(List<MultipartFile> files, int productId)throws Exception {
        List<ProductImg> productImgs = new ArrayList<ProductImg>();

        files.forEach(file -> {
            String originName = file.getOriginalFilename();

            Path uploadPath = Paths.get(filePath + "/product/" + originName);

            File f = new File(filePath + "/product");
            if(!f.exists()) {
                f.mkdirs();
            }

            try {
                Files.write(uploadPath, file.getBytes());
            }catch (IOException e) {
                throw new RuntimeException(e);
            }

            ProductImg productImg = ProductImg.builder()
                    .product_id(productId)
                    .img_name(originName)
                    .build();

            productImgs.add(productImg);

        });

        return productImgs;
    }


        // 등록된 상품(리스트) 불러오기
        @Override
        public List<ProductListRespDto> productList() throws Exception {
            Map<String, Object> paramsMap = new HashMap<String, Object>();




            List<ProductListRespDto> list = new ArrayList<ProductListRespDto>();

            productRepository.productList(paramsMap).forEach(product -> {
                list.add(product.productListRespDto());
            });

            return list;
        }


}


























