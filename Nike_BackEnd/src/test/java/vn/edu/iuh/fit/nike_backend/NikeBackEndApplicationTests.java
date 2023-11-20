package vn.edu.iuh.fit.nike_backend;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.domain.Sort;
import vn.edu.iuh.fit.nike_backend.ids.ProductImage_ID;
import vn.edu.iuh.fit.nike_backend.model.Product;
import vn.edu.iuh.fit.nike_backend.model.ProductImage;
import vn.edu.iuh.fit.nike_backend.respositories.ProductImageRepository;
import vn.edu.iuh.fit.nike_backend.respositories.ProductRepository;

import java.util.Comparator;
import java.util.Optional;

@SpringBootTest
class NikeBackEndApplicationTests {

	@Autowired
	private ProductImageRepository repository;
	@Autowired
	private ProductRepository productRepository;
	@Test
	void getall(){
		String index ="";
		String indexLast = "";
		for (ProductImage image:repository.findAll(Sort.sort(ProductImage_ID.class))) {
			if (image.getPath().equals(index)){
				index = image.getPath();
				System.out.println("}");
				System.out.println("{\n" +
						"    case '"+image.getPath()+"':\n" +
						"      switch (id) {");
			}
			System.out.println("case \""+image.getPath()+"\":return require(`./product_image/"+image.getProduct().getId()+"/"+image.getPath()+"`);");

		}
	}
}
