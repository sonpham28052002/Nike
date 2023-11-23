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

    @GetMapping(value = "/bestSellersOfWeek")
    public List<Product> getProductBestSellersOfWeek(){
        List<Product> productList = productRepository.get20ProductWithTheHighestPurchaseQuantityIn7Days();
        if(productList.size() <= 20)
            return productList;
        return productList.subList(0,20);
    }

    @GetMapping(value = "/bestSellers")
    public List<Product> getProductBestSellers(@RequestParam(value = "limit", required = false, defaultValue = "-1") int limit){
        List<Product> products = productRepository.getProductWithTheHighestPurchaseQuantity();
        if(limit == -1)
            return products;
        return products.subList(0, limit);
    }

    @GetMapping(value = "/discount")
    public List<Product> getProductDiscount(){
        return productRepository.findAllByDiscountIsGreaterThanOrderByDiscountDesc(0);
    }

    @GetMapping(value = "/search")
    public List<Product> getProductsWithTextSearch(
            @RequestParam(value = "textSearch", required = false, defaultValue = "") String textSearch,
            @RequestParam(value = "limit", required = false, defaultValue = "20") int limit){
        List<Product> productList = productRepository.findAllByTagContainsOrNameContainsOrBrandContainsOrderByDiscountDesc(textSearch, textSearch, textSearch);
        if(limit >= productList.size())
            return productList;
        return productList.subList(0, limit);
    }
}
