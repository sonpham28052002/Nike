package vn.edu.iuh.fit.nike_backend.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.*;
import vn.edu.iuh.fit.nike_backend.ids.ProductDescription_ID;

@Entity
@Table(name = "product_description")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Builder
@IdClass(ProductDescription_ID.class)
public class ProductDescription {
    @Id
    @ManyToOne
    @JsonBackReference
    @JoinColumn(name = "product_id")
    private Product product;
    @Id
    private long id;
    @Id
    private String title;
    private String content;

}