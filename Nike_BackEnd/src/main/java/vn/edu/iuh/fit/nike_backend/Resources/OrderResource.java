package vn.edu.iuh.fit.nike_backend.Resources;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import vn.edu.iuh.fit.nike_backend.enums.OrderStatus;
import vn.edu.iuh.fit.nike_backend.model.Order;
import vn.edu.iuh.fit.nike_backend.model.OrderDetail;
import vn.edu.iuh.fit.nike_backend.model.User;
import vn.edu.iuh.fit.nike_backend.respositories.OrderDetailRepository;
import vn.edu.iuh.fit.nike_backend.respositories.OrderRepository;
import vn.edu.iuh.fit.nike_backend.respositories.UserRepository;

import java.time.LocalDate;
import java.util.List;
import java.util.Objects;

@CrossOrigin(origins = HostFrontEnd.host)
@RestController
@RequestMapping(value = "/order" , produces = {MediaType.APPLICATION_JSON_VALUE})
public class OrderResource {
    @Autowired
    private OrderRepository orderRepository;

    @Autowired
    private UserRepository userRepository;

    @GetMapping
    public List<Order> getAll(@RequestParam(value = "userId", required = false, defaultValue = "") String userId){
        if(Objects.equals(userId, ""))
            return orderRepository.findAll();
        return orderRepository.findAllByUser(userRepository.findById(userId).orElse(null));
    }
    @PostMapping()
    public Order insert(@RequestBody Order order) {
        order.setDeliveryStatus(OrderStatus.Processing);
        order.setOrder_date(LocalDate.now());
      return orderRepository.save(order);
    }
}
