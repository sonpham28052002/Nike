package vn.edu.iuh.fit.nike_backend.respositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import vn.edu.iuh.fit.nike_backend.ids.FeedBack_ID;
import vn.edu.iuh.fit.nike_backend.model.Feedback;
@Repository
public interface FeedbackRepository extends JpaRepository<Feedback, FeedBack_ID> {
}