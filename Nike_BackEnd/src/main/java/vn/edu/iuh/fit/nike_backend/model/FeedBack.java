package vn.edu.iuh.fit.nike_backend.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.*;
import vn.edu.iuh.fit.nike_backend.ids.FeelBack_ID;

import java.time.LocalDate;

@Entity
@Table(name = "feel_back")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Builder
@IdClass(FeelBack_ID.class)
public class Feedback {
    @Id
    private long id;

    @Id
    @ManyToOne
    @JsonBackReference
    @JoinColumn(name = "product_id")
    private Product product;
    @Id
    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @Column(columnDefinition = "date")
    private LocalDate date;

    @Column
    private float start;
    @Column
    private String comment;
}
