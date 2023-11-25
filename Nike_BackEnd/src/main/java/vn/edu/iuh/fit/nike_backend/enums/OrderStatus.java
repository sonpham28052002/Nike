package vn.edu.iuh.fit.nike_backend.enums;

public enum OrderStatus {
    Processing(0), // Đơn hàng đang được chuẩn bị và đóng gói để vận chuyển.
    Customs_Clearance(1), // Gói hàng đang được hải quan kiểm tra ; ;

    Shipped(2), // Đơn hàng đã được chuyển giao cho đơn vị vận chuyển và đang trên đường đến điểm đến.
    Out_For_Delivery(3), // Gói hàng đang trên đường đến địa chỉ nhận hàng.
    Delivered(4), // Gói hàng đã được giao thành công đến địa chỉ đã chỉ định.
    Attempted_Delivery(5), // Đơn hàng đã tới nơi nhưng không ai nhận
    Returned_To_Sender(6), // Gói hàng không thể được giao và đã được gửi trở lại người gửi.
    On_Hold(7), // Tạm dừng giao hàng
    Lost_In_Transit(8); // Gói hàng bị mất

    private final int value;

    OrderStatus(int value) {
        this.value = value;
    }

    public int getValue() {
        return value;
    }
}
