package vn.edu.iuh.fit.nike_backend.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.*;
import vn.edu.iuh.fit.nike_backend.ids.ProductSize_ID;

@Entity
@Table(name = "product_size")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Builder
@IdClass(ProductSize_ID.class)
public class ProductSize {
    @Id
    @Column(name = "size_id")
    private float id;
    @Id
    @ManyToOne
    @JsonBackReference
    @JoinColumn(name = "product_id")
    private Product product;

    @Column(name = "quantity")
    private long quantity;

}
