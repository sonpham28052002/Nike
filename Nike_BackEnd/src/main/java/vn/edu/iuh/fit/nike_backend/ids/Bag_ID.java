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
@Builder
public class Bag_ID implements Serializable {
    private Product product;
    private User user;
    private float size;
}
