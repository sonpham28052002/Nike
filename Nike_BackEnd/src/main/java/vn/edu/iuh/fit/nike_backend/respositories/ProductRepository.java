package vn.edu.iuh.fit.nike_backend.respositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import vn.edu.iuh.fit.nike_backend.model.Product;

import java.util.List;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {
    @Query("SELECT p FROM Product p WHERE p.id IN " +
            "(SELECT od.product.id FROM OrderDetail od WHERE od.order.id IN " +
            "(SELECT o.id FROM Order o WHERE DATEDIFF(CURRENT_DATE, o.order_date) <= 7)" +
            " GROUP BY od.product.id ORDER BY SUM(od.quantity) DESC)")
    List<Product> get20ProductWithTheHighestPurchaseQuantity();

    List<Product> findAllByDiscountIsGreaterThanOrderByDiscountDesc(int discount);
}