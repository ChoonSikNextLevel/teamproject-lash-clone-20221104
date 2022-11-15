package com.lash.lashClone.service.admin;

import com.lash.lashClone.domain.Product;
import com.lash.lashClone.domain.ProductImg;
import com.lash.lashClone.dto.admin.ProductRegistReqDto;
import com.lash.lashClone.repository.admin.ProductRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class ProductServiceImpl implements ProductService {

    private final ProductRepository productRepository;

    @Override
    public boolean addProduct(ProductRegistReqDto productRegistReqDto) throws Exception {

        int result = 0;

        List<MultipartFile> files = productRegistReqDto.getFiles();
        List<ProductImg> productImgs = null;

        Product product = productRegistReqDto.toProduct();
        result = productRepository.saveProduct(product);

        if(files != null) {
            int productId = product.getProduct_id();
            productImgs = getProductImgs(files, productId);
        }

        if(result == 0) {
            return false;
        }

        return true;
    }

    private List<ProductImg> getProductImgs(List<MultipartFile> files, int productId)throws Exception {
        List<ProductImg> productImgs = new ArrayList<ProductImg>();

        files.forEach(file -> {
            String origin_name
        });


        return productImgs;
    }
}
