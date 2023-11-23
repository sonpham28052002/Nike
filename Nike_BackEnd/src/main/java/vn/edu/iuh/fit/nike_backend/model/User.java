package vn.edu.iuh.fit.nike_backend.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "user")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Builder
@EqualsAndHashCode(exclude = {"id"})
public class User {
    @Id
    @Column(name = "user_id")
    private String id;
    @Column
    private String name;
    @Column
    private String email;
    @Column
    private String address;
    @Column
    private String image;
    @Column
    private boolean status;
    @Column
    private String bag;
    @Column
    private String favorites;
}
