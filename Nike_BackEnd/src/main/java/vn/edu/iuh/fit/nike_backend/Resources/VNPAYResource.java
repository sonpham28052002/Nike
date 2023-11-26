package vn.edu.iuh.fit.nike_backend.Resources;

import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import vn.edu.iuh.fit.nike_backend.config.Config_VNPAY;
import vn.edu.iuh.fit.nike_backend.dto.UrlPayment;
import vn.edu.iuh.fit.nike_backend.model.Order;
import vn.edu.iuh.fit.nike_backend.respositories.OrderRepository;

import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;
import java.text.SimpleDateFormat;
import java.util.*;

@CrossOrigin(HostFrontEnd.host)
@Controller
@RequestMapping("/payment")
public class VNPAYResource {

    @Autowired
    private OrderRepository orderRepository;

    @GetMapping("/create_payment/amount={amount}&order_id={order_id}")
    public ResponseEntity<?> createPayment(@PathVariable long amount , @PathVariable long order_id , Model model) throws UnsupportedEncodingException {
        String urlReturn ="http://localhost:8080/payment";
        String vnp_Version = "2.1.0";
        String vnp_Command = "pay";
        String vnp_TxnRef = Config_VNPAY.getRandomNumber(8);
        String vnp_IpAddr = "127.0.0.1";
        String vnp_TmnCode = Config_VNPAY.vnp_TmnCode;
        String orderType = "order-type";

        Map<String, String> vnp_Params = new HashMap<>();
        vnp_Params.put("vnp_Version", vnp_Version);
        vnp_Params.put("vnp_Command", vnp_Command);
        vnp_Params.put("vnp_TmnCode", vnp_TmnCode);
        vnp_Params.put("vnp_Amount", String.valueOf(amount*100));
        vnp_Params.put("vnp_CurrCode", "VND");

        vnp_Params.put("vnp_TxnRef", vnp_TxnRef);
        vnp_Params.put("vnp_OrderInfo", "Thanh_Toan_Don_hang_"+order_id);
        vnp_Params.put("vnp_OrderType", orderType);

        String locate = "vn";
        vnp_Params.put("vnp_Locale", locate);

        urlReturn += Config_VNPAY.vnp_Returnurl;
        System.out.println(urlReturn);
        vnp_Params.put("vnp_ReturnUrl", urlReturn);
        vnp_Params.put("vnp_IpAddr", vnp_IpAddr);

        Calendar cld = Calendar.getInstance(TimeZone.getTimeZone("Etc/GMT+7"));
        SimpleDateFormat formatter = new SimpleDateFormat("yyyyMMddHHmmss");
        String vnp_CreateDate = formatter.format(cld.getTime());
        vnp_Params.put("vnp_CreateDate", vnp_CreateDate);

        cld.add(Calendar.MINUTE, 15);
        String vnp_ExpireDate = formatter.format(cld.getTime());
        vnp_Params.put("vnp_ExpireDate", vnp_ExpireDate);

        List fieldNames = new ArrayList(vnp_Params.keySet());
        Collections.sort(fieldNames);
        StringBuilder hashData = new StringBuilder();
        StringBuilder query = new StringBuilder();
        Iterator itr = fieldNames.iterator();
        while (itr.hasNext()) {
            String fieldName = (String) itr.next();
            String fieldValue = (String) vnp_Params.get(fieldName);
            if ((fieldValue != null) && (fieldValue.length() > 0)) {
                //Build hash data
                hashData.append(fieldName);
                hashData.append('=');
                try {
                    hashData.append(URLEncoder.encode(fieldValue, StandardCharsets.US_ASCII.toString()));
                    //Build query
                    query.append(URLEncoder.encode(fieldName, StandardCharsets.US_ASCII.toString()));
                    query.append('=');
                    query.append(URLEncoder.encode(fieldValue, StandardCharsets.US_ASCII.toString()));
                } catch (UnsupportedEncodingException e) {
                    e.printStackTrace();
                }
                if (itr.hasNext()) {
                    query.append('&');
                    hashData.append('&');
                }
            }
        }
        String queryUrl = query.toString();
        String vnp_SecureHash = Config_VNPAY.hmacSHA512(Config_VNPAY.vnp_HashSecret, hashData.toString());
        queryUrl += "&vnp_SecureHash=" + vnp_SecureHash;
        String paymentUrl = Config_VNPAY.vnp_PayUrl + "?" + queryUrl;
        System.out.println(paymentUrl);

        return ResponseEntity.status(HttpStatus.OK).body(new UrlPayment(paymentUrl));
    }

    @GetMapping("/vnpay-payment")
    public String successPayment(HttpServletRequest httpRequest, Model model){

        String orderInfo = httpRequest.getParameter("vnp_OrderInfo");
        String paymentTime = httpRequest.getParameter("vnp_PayDate");
        String transactionId = httpRequest.getParameter("vnp_TransactionNo");
        String totalPrice = httpRequest.getParameter("vnp_Amount");

        model.addAttribute("orderId", orderInfo);
        model.addAttribute("totalPrice", totalPrice);
        model.addAttribute("paymentTime", paymentTime);
        model.addAttribute("transactionId", transactionId);

        long order_id = Long.parseLong(orderInfo.substring(orderInfo.lastIndexOf("_")+1));
        Order order = orderRepository.findById(order_id).get();
        order.setPaid(true);
        orderRepository.save(order);
        return "ordersuccess";
    }
}
