package vn.edu.iuh.fit.nike_backend.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.*;
import vn.edu.iuh.fit.nike_backend.ids.Bag_ID;

@Entity
@Table(name = "bag")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@EqualsAndHashCode()
@IdClass(Bag_ID.class)
public class Bag {
    @Id
    @ManyToOne
    @JoinColumn(name = "proudct_id")
    private Product product;

    @Id
    @ManyToOne
    @JsonBackReference
    @JoinColumn(name = "user_id")
    private User user;

    @Column
    private int quantity;
    @Column
    private float size;
}
