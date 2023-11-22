package vn.edu.iuh.fit.nike_backend.Resources;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import vn.edu.iuh.fit.nike_backend.ids.FeedBack_ID;
import vn.edu.iuh.fit.nike_backend.model.Feedback;
import vn.edu.iuh.fit.nike_backend.model.Product;
import vn.edu.iuh.fit.nike_backend.model.User;
import vn.edu.iuh.fit.nike_backend.respositories.FeedbackRepository;
import vn.edu.iuh.fit.nike_backend.respositories.ProductRepository;
import vn.edu.iuh.fit.nike_backend.respositories.UserRepository;

import java.util.List;
@CrossOrigin(origins = HostFrontEnd.host)
@RestController
@RequestMapping(value = "/feed_back",produces = {MediaType.APPLICATION_JSON_VALUE})
public class FeedBackResource {

    @Autowired
    private FeedbackRepository feedbackRepository;

    @Autowired
    private ProductRepository productRepository;
    @Autowired
    private UserRepository userRepository;
    @GetMapping
    public List<Feedback> getAll(){
        return feedbackRepository.findAll();
    }

    @GetMapping(value = "id={id}&user_id={user_id}&product_id={product_id}")
    public Feedback getFeedback(@PathVariable long id, @PathVariable long user_id, @PathVariable long product_id){
        User user = userRepository.findById(user_id).get();
        Product product = productRepository.findById(product_id).get();
        FeedBack_ID feelBackId =new FeedBack_ID(id,user,product);
        return feedbackRepository.findById(feelBackId).get();

    }
    @PutMapping(value = "id={id}&user_id={user_id}&product_id={product_id}")
    public boolean insertFeelBack(@PathVariable long id,@PathVariable long user_id, @PathVariable long product_id , @RequestBody Feedback feedback){
        User user = userRepository.findById(user_id).get();
        Product product = productRepository.findById(product_id).get();
        feedback.setUser(user);
        feedback.setProduct(product);
        feedback.setId(id);
        feedbackRepository.save(feedback);
        return true;
    }
}
