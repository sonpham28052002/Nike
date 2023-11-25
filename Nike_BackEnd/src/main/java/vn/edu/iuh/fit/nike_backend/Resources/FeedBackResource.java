package vn.edu.iuh.fit.nike_backend.Resources;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import vn.edu.iuh.fit.nike_backend.ids.FeedBack_ID;
import vn.edu.iuh.fit.nike_backend.model.FeedBack;
import vn.edu.iuh.fit.nike_backend.model.Product;
import vn.edu.iuh.fit.nike_backend.model.User;
import vn.edu.iuh.fit.nike_backend.respositories.FeedbackRepository;
import vn.edu.iuh.fit.nike_backend.respositories.ProductRepository;
import vn.edu.iuh.fit.nike_backend.respositories.UserRepository;

import java.util.List;
@CrossOrigin(origins = HostFrontEnd.host)
@RestController
@RequestMapping(value = "/feedback",produces = {MediaType.APPLICATION_JSON_VALUE})
public class FeedBackResource {

    @Autowired
    private FeedbackRepository feedbackRepository;

    @Autowired
    private ProductRepository productRepository;
    @Autowired
    private UserRepository userRepository;
    @GetMapping
    public List<FeedBack> getAll(){
        return feedbackRepository.findAll();
    }

    @GetMapping(value = "user_id={user_id}&product_id={product_id}")
    public FeedBack getFeedback( @PathVariable String user_id, @PathVariable long product_id){
        User user = userRepository.findById(user_id).get();
        Product product = productRepository.findById(product_id).get();
        FeedBack_ID feelBackId =new FeedBack_ID(user,product);
        return feedbackRepository.findById(feelBackId).get();
    }
    @PutMapping(value = "user_id={user_id}&product_id={product_id}")
    public boolean insertFeelBack(@PathVariable String user_id, @PathVariable long product_id , @RequestBody FeedBack feedback){
        User user = userRepository.findById(user_id).get();
        Product product = productRepository.findById(product_id).get();
        feedback.setUser(user);
        feedback.setProduct(product);
        feedbackRepository.save(feedback);
        return true;
    }
}
