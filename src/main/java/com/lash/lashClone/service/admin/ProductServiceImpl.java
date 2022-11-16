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
import java.util.List;

@Service
@RequiredArgsConstructor
public class ProductServiceImpl implements ProductService {

    @Value("${file.path}")
    private String filePath;
    private final ProductRepository productRepository;

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

    private List<ProductImg> getProductImgs(List<MultipartFile> files, int productId)throws Exception {
        List<ProductImg> productImgs = new ArrayList<ProductImg>();

        files.forEach(file -> {
<<<<<<< HEAD
            String origin_name;
        });
=======
            String originName = file.getOriginalFilename();
//            String extension = originName.substring(originName.lastIndexOf("."));

            Path uploadPath = Paths.get(filePath + "/product/" + originName);

            File f = new File(filePath + "/product");
            if(!f.exists()) {
                f.mkdirs();
            }
>>>>>>> 10904056e35394b499acdfd1e0ccb50c7be22f6c

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


    @Override
    public List<ProductListRespDto> getProductList() throws Exception {
        return null;
    }
}
























