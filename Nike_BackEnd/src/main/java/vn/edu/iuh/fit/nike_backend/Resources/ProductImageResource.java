package vn.edu.iuh.fit.nike_backend.Resources;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import vn.edu.iuh.fit.nike_backend.respositories.ProductImageRepository;

import java.util.ArrayList;
import java.util.List;
@CrossOrigin(origins = HostFrontEnd.host)
@RestController
@RequestMapping(value = "/product_image",produces = {MediaType.APPLICATION_JSON_VALUE})
public class ProductImageResource {

    @Autowired
    private ProductImageRepository repository;
    @GetMapping()
    public List<String> getProductImageByIDProduct(){
        List<String> ds = new ArrayList<>();

        return ds;
    }
}
