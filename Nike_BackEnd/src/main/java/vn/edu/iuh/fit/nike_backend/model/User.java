package vn.edu.iuh.fit.nike_backend.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.*;

import java.util.List;

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
    private String favorites;
    @JsonManagedReference
    @OneToMany(mappedBy = "user",fetch = FetchType.LAZY, cascade =  CascadeType.ALL)
    @Column(name = "bags")
    private List<Bag> bags;
}
