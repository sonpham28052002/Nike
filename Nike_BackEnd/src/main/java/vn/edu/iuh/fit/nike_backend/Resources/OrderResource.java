package vn.edu.iuh.fit.nike_backend.Resources;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import vn.edu.iuh.fit.nike_backend.model.Order;
import vn.edu.iuh.fit.nike_backend.respositories.OrderRepository;

import java.util.List;
@CrossOrigin(origins = HostFrontEnd.host)
@RestController
@RequestMapping(value = "/order" , produces = {MediaType.APPLICATION_JSON_VALUE})
public class OrderResource {
    @Autowired
    private OrderRepository orderRepository;

    @GetMapping
    public List<Order> getAll(){
        return orderRepository.findAll();
    }

}
