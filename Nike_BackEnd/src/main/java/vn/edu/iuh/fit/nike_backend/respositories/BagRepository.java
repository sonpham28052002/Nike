package vn.edu.iuh.fit.nike_backend.respositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import vn.edu.iuh.fit.nike_backend.ids.Bag_ID;
import vn.edu.iuh.fit.nike_backend.model.Bag;
import vn.edu.iuh.fit.nike_backend.model.Product;
@Repository
public interface BagRepository extends JpaRepository<Bag, Bag_ID> {
}