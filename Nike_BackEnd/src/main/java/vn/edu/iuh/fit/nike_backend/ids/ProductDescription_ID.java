package vn.edu.iuh.fit.nike_backend.ids;

import lombok.*;
import vn.edu.iuh.fit.nike_backend.model.Product;

import java.io.Serializable;
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@EqualsAndHashCode
public class ProductDescription_ID implements Serializable {
    private long id;
    private String title;
    private Product product;
}
