package vn.edu.iuh.fit.nike_backend.Resources;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import vn.edu.iuh.fit.nike_backend.model.Product;
import vn.edu.iuh.fit.nike_backend.respositories.ProductRepository;

import java.util.List;
import java.util.Optional;


@CrossOrigin(origins = HostFrontEnd.host)
@RestController
@RequestMapping(value = "/product", produces = {MediaType.APPLICATION_JSON_VALUE})
public class ProductResource {

    @Autowired
    private ProductRepository productRepository;
    @GetMapping
    public List<Product> getAll(){
        return productRepository.findAll();
    }

    @GetMapping(value = "/id={id}")
    public Optional<Product> getProductById(@PathVariable("id") long id){
        return productRepository.findById(id);
    }

    @GetMapping(value = "/bestSellers")
    public List<Product> getProductBestSellers(){
        List<Product> productList = productRepository.get20ProductWithTheHighestPurchaseQuantity();
        if(productList.size() <= 20)
            return productList;
        return productList.subList(0,20);
    }
}
