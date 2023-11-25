package vn.edu.iuh.fit.nike_backend.Resources;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import vn.edu.iuh.fit.nike_backend.model.User;
import vn.edu.iuh.fit.nike_backend.respositories.UserRepository;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = HostFrontEnd.host)
@RestController
@RequestMapping(value = "/user", produces = {MediaType.APPLICATION_JSON_VALUE})
public class UserResource {
    @Autowired
    private UserRepository userRepository;

    @GetMapping
    public List<User> getAll() {
        return userRepository.findAll();
    }

    @GetMapping(value = "/id={id}")
    public Optional<User> getUser(@PathVariable("id") String userId){
        return userRepository.findById(userId);
    }

    @PutMapping(value = "id={id}")
    public boolean update(@PathVariable("id") String id, @RequestBody User user) {
        if (userRepository.findById(id).isEmpty()){
            return false;
        }
        try {
            userRepository.save(user);
            return true;
        } catch (Exception exception) {
            return false;
        }

    }

    @PostMapping
    public boolean insert(@RequestBody User user) {
        if (!userRepository.findById(user.getId()).isEmpty()){
            return false;
        }
        try {
            userRepository.save(user);
            return true;
        } catch (Exception exception) {
            return false;
        }
    }

}
