package com.imsdemo.service;

import com.imsdemo.model.Product;

import java.util.List;


public interface IProductService {
    Product addProduct(Product product);
    List<Product> getProducts();
    Product updateProduct(Product product, Long id);
    Product getProductById(Long id);
    void deleteProduct(Long id);
}
