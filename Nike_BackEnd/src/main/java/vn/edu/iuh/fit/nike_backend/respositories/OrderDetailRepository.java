package vn.edu.iuh.fit.nike_backend.respositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import vn.edu.iuh.fit.nike_backend.ids.OrderDetail_ID;
import vn.edu.iuh.fit.nike_backend.model.Order;
import vn.edu.iuh.fit.nike_backend.model.OrderDetail;

import java.util.List;

@Repository
public interface OrderDetailRepository extends JpaRepository<OrderDetail, OrderDetail_ID> {
    @Query("SELECT dt FROM OrderDetail dt WHERE dt.order.id IN (SELECT od.id FROM Order od WHERE od.user.id = ?1) order by dt.order.id desc ")
    public List<OrderDetail> getAllByUser(String id);
}