package vn.edu.iuh.fit.nike_backend.model;


import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Entity
@Table(name = "product")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Builder
@EqualsAndHashCode(exclude = {"id"})
public class Product {
    @Id
    private long id;
    @Column
    private String name;
    @Column
    private String tag;
    @Column
    private String color;
    @Column
    private Double price;
    @Column
    private String description;
    @Column
    private boolean status;
    @Column
    private String information;
    @Column
    private String brand;
    @Column
    private int discount;
    @Column
    private String favorites;

    @OneToMany(mappedBy = "product",fetch = FetchType.LAZY)
    @Column(name = "bags")
    @JsonIgnore
    private List<Bag> bags;

    @JsonManagedReference
    @OneToMany(mappedBy = "product",fetch = FetchType.LAZY)
    @Column(name = "product_image")
    private List<ProductImage> productImages;

    @JsonManagedReference
    @OneToMany(mappedBy = "product",fetch = FetchType.LAZY)
    @Column(name = "product_size")
    private List<ProductSize> productSizes;

    @JsonManagedReference
    @OneToMany(mappedBy = "product",fetch = FetchType.LAZY)
    @Column(name = "product_description")
    private List<ProductDescription> productDescriptions;

    @JsonManagedReference
    @OneToMany(mappedBy = "product",fetch = FetchType.LAZY)
    @Column(name = "feedback")
    private List<FeedBack> feedbacks;
    @Override
    public String toString() {
        return "Product{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", tag='" + tag + '\'' +
                ", color='" + color + '\'' +
                ", price=" + price +
                ", description='" + description + '\'' +
                ", status=" + status +
                ", information='" + information + '\'' +
                ", brand='" + brand + '\'' +
                ", discount=" + discount +
                '}';
    }
}