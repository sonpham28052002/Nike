package vn.edu.iuh.fit.nike_backend.respositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import vn.edu.iuh.fit.nike_backend.ids.FeelBack_ID;
import vn.edu.iuh.fit.nike_backend.model.Feelback;
@Repository
public interface FeelbackRepository extends JpaRepository<Feelback, FeelBack_ID> {
}