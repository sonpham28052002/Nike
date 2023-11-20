package vn.edu.iuh.fit.nike_backend.respositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import vn.edu.iuh.fit.nike_backend.ids.ProductDescription_ID;
import vn.edu.iuh.fit.nike_backend.model.Product;
import vn.edu.iuh.fit.nike_backend.model.ProductDescription;
@Repository
public interface ProductDescriptionRepository extends JpaRepository<ProductDescription, ProductDescription_ID> {
}