package vn.edu.iuh.fit.nike_backend.model;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.*;
import vn.edu.iuh.fit.nike_backend.enums.OrderStatus;

import java.time.LocalDate;
import java.util.List;

@Entity
@Table(name = "orders")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Builder
@ToString
public class Order {
    @Id
    @Column(name = "order_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @Column
    private String address;

    @Column(name = "delivery_status")
    private OrderStatus deliveryStatus;

    @Column
    private boolean paid;

    @Column
    private LocalDate order_date;

    @OneToMany(mappedBy = "order",cascade = CascadeType.ALL)
    @Column(name = "order_details")
    @JsonManagedReference
    private List<OrderDetail> orderDetails;


}
