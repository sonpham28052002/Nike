package vn.edu.iuh.fit.nike_backend.Resources;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import vn.edu.iuh.fit.nike_backend.ids.ProductImage_ID;
import vn.edu.iuh.fit.nike_backend.model.Product;
import vn.edu.iuh.fit.nike_backend.model.ProductImage;
import vn.edu.iuh.fit.nike_backend.respositories.ProductImageRepository;

import java.util.ArrayList;
import java.util.List;
@CrossOrigin(origins = "http://localhost:19006/")
@RestController
@RequestMapping(value = "/product_image",produces = {MediaType.APPLICATION_JSON_VALUE})
public class ProductImageResource {

    @Autowired
    private ProductImageRepository repository;
    @GetMapping()
    public List<String> getProductImageByIDProduct(){
        List<String> ds = new ArrayList<>();
        long index =1;
        long indexLast = 1;
        for (ProductImage image:repository.findAll()) {
            if (image.getProduct().getId() != index){
                index = image.getProduct().getId();
            }

            if (indexLast== index){
                System.out.println("{\n" +
                        "    case \"1.jpg\":\n" +
                        "      switch (name) {");
                indexLast++;
            }
            ds.add("case \""+image.getPath()+"\":return require(`./product_image/"+image.getProduct().getId()+"/"+image.getPath()+"`);");
        }
        return ds;
    }
}
