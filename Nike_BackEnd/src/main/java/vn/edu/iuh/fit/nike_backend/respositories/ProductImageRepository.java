package vn.edu.iuh.fit.nike_backend.respositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import vn.edu.iuh.fit.nike_backend.ids.ProductImage_ID;
import vn.edu.iuh.fit.nike_backend.model.Product;
import vn.edu.iuh.fit.nike_backend.model.ProductImage;
@Repository
public interface ProductImageRepository extends JpaRepository<ProductImage, ProductImage_ID> {
}