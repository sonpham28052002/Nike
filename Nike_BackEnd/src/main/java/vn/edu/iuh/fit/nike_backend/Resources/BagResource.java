package vn.edu.iuh.fit.nike_backend.Resources;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import vn.edu.iuh.fit.nike_backend.model.Bag;
import vn.edu.iuh.fit.nike_backend.model.FeedBack;
import vn.edu.iuh.fit.nike_backend.model.Product;
import vn.edu.iuh.fit.nike_backend.model.User;
import vn.edu.iuh.fit.nike_backend.respositories.BagRepository;
import vn.edu.iuh.fit.nike_backend.respositories.ProductRepository;
import vn.edu.iuh.fit.nike_backend.respositories.UserRepository;

@CrossOrigin(origins = HostFrontEnd.host)
@RestController
@RequestMapping(value = "/bag",produces = {MediaType.APPLICATION_JSON_VALUE})
public class BagResource {
    @Autowired
    private BagRepository bagRepository;
    @Autowired
    private ProductRepository productRepository;
    @Autowired
    private UserRepository userRepository;

    @PutMapping(value = "user_id={user_id}&product_id={product_id}")
    public boolean insertFeelBack(@PathVariable String user_id, @PathVariable long product_id , @RequestBody Bag bag){
        User user = userRepository.findById(user_id).get();
        Product product = productRepository.findById(product_id).get();
        bag.setUser(user);
        bag.setProduct(product);
        bagRepository.save(bag);
        return true;
    }
}
