package vn.edu.iuh.fit.nike_backend.Resources;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import vn.edu.iuh.fit.nike_backend.model.User;
import vn.edu.iuh.fit.nike_backend.respositories.UserRepository;

import java.util.List;
@CrossOrigin(origins = "http://localhost:19006/")
@RestController
@RequestMapping(value = "/user", produces = {MediaType.APPLICATION_JSON_VALUE})
public class UserResource {
    @Autowired
    private UserRepository userRepository;

    @GetMapping
    public List<User> getAll(){
        return userRepository.findAll();
    }

    @PutMapping(value = "id={id}")
    public boolean update(@PathVariable("id") long id, @RequestBody User user){
        user.setId(id);
        return userRepository.save(user).isStatus();
    }

}
