package vn.edu.iuh.fit.nike_backend.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;
import org.checkerframework.checker.units.qual.C;
import vn.edu.iuh.fit.nike_backend.ids.ProductImage_ID;

@Entity
@Table(name = "product_image")
@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
@Builder
@IdClass(ProductImage_ID.class)
public class ProductImage {
    @Id
    @ManyToOne
    @JoinColumn(name = "product_id")
    @JsonBackReference
    private Product product;
    @Id
    private long id;
    @Column
    private String path;

    @Override
    public String toString() {
        return "ProductImage{" +
                ", id=" + id +
                ", path='" + path + '\'' +
                '}';
    }
}
