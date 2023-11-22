package vn.edu.iuh.fit.nike_backend.ids;

import lombok.*;
import vn.edu.iuh.fit.nike_backend.model.Product;
import vn.edu.iuh.fit.nike_backend.model.User;

import java.io.Serializable;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@EqualsAndHashCode
public class FeedBack_ID implements Serializable {
    private long id;
    private User user;
    private Product product;
}
