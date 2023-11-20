package vn.edu.iuh.fit.nike_backend.Resources;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import vn.edu.iuh.fit.nike_backend.ids.FeelBack_ID;
import vn.edu.iuh.fit.nike_backend.model.Feelback;
import vn.edu.iuh.fit.nike_backend.model.Product;
import vn.edu.iuh.fit.nike_backend.model.User;
import vn.edu.iuh.fit.nike_backend.respositories.FeelbackRepository;
import vn.edu.iuh.fit.nike_backend.respositories.ProductRepository;
import vn.edu.iuh.fit.nike_backend.respositories.UserRepository;

import java.util.List;
@CrossOrigin(origins = "http://localhost:19006/")
@RestController
@RequestMapping(value = "/feel_back",produces = {MediaType.APPLICATION_JSON_VALUE})
public class FeelBackResource {

    @Autowired
    private FeelbackRepository feelbackRepository;

    @Autowired
    private ProductRepository productRepository;
    @Autowired
    private UserRepository userRepository;
    @GetMapping
    public List<Feelback> getAll(){
        return feelbackRepository.findAll();
    }

    @GetMapping(value = "id={id}&user_id={user_id}&product_id={product_id}")
    public Feelback getFeelback(@PathVariable long id,@PathVariable long user_id, @PathVariable long product_id){
        User user = userRepository.findById(user_id).get();
        Product product = productRepository.findById(product_id).get();
        FeelBack_ID feelBackId =new FeelBack_ID(id,user,product);
        return feelbackRepository.findById(feelBackId).get();

    }
    @PutMapping(value = "id={id}&user_id={user_id}&product_id={product_id}")
    public boolean insertFeelBack(@PathVariable long id,@PathVariable long user_id, @PathVariable long product_id , @RequestBody Feelback feelback){
        User user = userRepository.findById(user_id).get();
        Product product = productRepository.findById(product_id).get();
        feelback.setUser(user);
        feelback.setProduct(product);
        feelback.setId(id);
        return feelbackRepository.save(feelback)!=null;
    }
}
