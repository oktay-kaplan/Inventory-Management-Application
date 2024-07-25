package com.imsdemo.service;

import com.imsdemo.exception.ProductAlreadyExistsException;
import com.imsdemo.exception.ProductNotFoundException;
import com.imsdemo.model.Product;
import com.imsdemo.repository.ProductRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ProductService implements IProductService {
    private final ProductRepository productRepository;

    @Override
    public List<Product> getProducts() {
        return productRepository.findAll();
    }

    @Override
    public Product addProduct(Product product) {
        if (productAlreadyExists(product.getName())) {
            throw new ProductAlreadyExistsException(product.getName() + " already exists!");
        }

        return productRepository.save(product);
    }

    @Override
    public Product updateProduct(Product product, Long id) {
        return productRepository.findById(id).map(p -> {
            p.setName(product.getName());
            p.setCostPrice(product.getCostPrice());
            p.setSellingPrice(product.getSellingPrice());
            p.setStockQuantity(product.getStockQuantity());
            p.setProductGroup(product.getProductGroup());
            p.setImageUrl(product.getImageUrl());

            return productRepository.save(p);
        }).orElseThrow(() -> new ProductNotFoundException("Sorry, this product could not be found"));
    }

    @Override
    public Product getProductById(Long id) {
        return productRepository.findById(id)
                .orElseThrow(() -> new ProductNotFoundException("Sorry, no product found with the Id :" + id));
    }

    @Override
    public void deleteProduct(Long id) {
        if (!productRepository.existsById(id)) {
            throw new ProductNotFoundException("Sorry, product not found");
        }
        productRepository.deleteById(id);
    }

    private boolean productAlreadyExists(String name) {
        return productRepository.findByName(name).isPresent();
    }


}
