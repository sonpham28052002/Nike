package vn.edu.iuh.fit.nike_backend.ids;

import lombok.*;
import vn.edu.iuh.fit.nike_backend.model.Product;
import vn.edu.iuh.fit.nike_backend.model.ProductImage;

import java.io.Serializable;
import java.util.Objects;
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@EqualsAndHashCode
public class ProductImage_ID implements Serializable {
    private long id;
    private Product product;
}
