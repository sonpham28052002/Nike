package vn.edu.iuh.fit.nike_backend.respositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import vn.edu.iuh.fit.nike_backend.ids.OrderDetail_ID;
import vn.edu.iuh.fit.nike_backend.model.Order;
import vn.edu.iuh.fit.nike_backend.model.OrderDetail;
@Repository
public interface OrderDetailRepository extends JpaRepository<OrderDetail, OrderDetail_ID> {
}