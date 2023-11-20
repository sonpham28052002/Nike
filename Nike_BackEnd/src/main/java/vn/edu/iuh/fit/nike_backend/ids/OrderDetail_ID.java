package vn.edu.iuh.fit.nike_backend.ids;

import vn.edu.iuh.fit.nike_backend.model.Order;
import vn.edu.iuh.fit.nike_backend.model.Product;

import java.io.Serializable;

public class OrderDetail_ID implements Serializable {
    private Product product;
    private Order order;

}
