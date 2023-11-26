package vn.edu.iuh.fit.nike_backend.Resources;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import vn.edu.iuh.fit.nike_backend.model.Order;
import vn.edu.iuh.fit.nike_backend.model.OrderDetail;
import vn.edu.iuh.fit.nike_backend.model.Product;
import vn.edu.iuh.fit.nike_backend.respositories.OrderDetailRepository;
import vn.edu.iuh.fit.nike_backend.respositories.OrderRepository;
import vn.edu.iuh.fit.nike_backend.respositories.ProductRepository;

import java.util.List;

@CrossOrigin(origins = HostFrontEnd.host)
@RestController
@RequestMapping(value = "/orderDetail", produces = {MediaType.APPLICATION_JSON_VALUE})
public class OrderDetailResource {
    @Autowired
    private OrderDetailRepository orderDetailRepository;
    @Autowired
    private ProductRepository productRepository;
    @Autowired

    private OrderRepository orderRepository;

    @PostMapping("order_id={order_id}&product_id={product_id}")
    public boolean insert(@PathVariable long order_id, @PathVariable long product_id, @RequestBody OrderDetail orderDetail) {
        Order order = orderRepository.findById(order_id).get();
        Product product = productRepository.findById(product_id).get();
        orderDetail.setProduct(product);
        orderDetail.setOrder(order);
        try {
            orderDetailRepository.save(orderDetail);
            return true;
        } catch (Exception exception) {
            return false;
        }

    }
    @GetMapping("user_id={user_id}")
    public List<OrderDetail> getAllByUser_id(@PathVariable String user_id){
        return orderDetailRepository.getAllByUser(user_id);
    }
}
