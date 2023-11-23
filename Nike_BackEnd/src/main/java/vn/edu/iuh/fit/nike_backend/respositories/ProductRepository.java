package vn.edu.iuh.fit.nike_backend.respositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import vn.edu.iuh.fit.nike_backend.model.Product;

import java.util.List;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {
    @Query("SELECT od.product FROM OrderDetail od " +
            "WHERE DATEDIFF(CURRENT_DATE, od.order.order_date) < 7 " +
            "GROUP BY od.product.id ORDER BY SUM(od.quantity) DESC ")
    List<Product> get20ProductWithTheHighestPurchaseQuantityIn7Days();

    @Query("SELECT od.product FROM OrderDetail od " +
            "GROUP BY od.product.id ORDER BY SUM(od.quantity) DESC ")
    List<Product> getProductWithTheHighestPurchaseQuantity();

    List<Product> findAllByDiscountIsGreaterThanOrderByDiscountDesc(int discount);

    List<Product> findAllByTagContainsOrNameContainsOrBrandContainsOrderByDiscountDesc(String textContain1, String textContain2, String textContain3);
}