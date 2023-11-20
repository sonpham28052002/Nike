package vn.edu.iuh.fit.nike_backend.respositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import vn.edu.iuh.fit.nike_backend.ids.ProductSize_ID;
import vn.edu.iuh.fit.nike_backend.model.ProductSize;
@Repository
public interface ProductSizeRepository extends JpaRepository<ProductSize, ProductSize_ID> {
}