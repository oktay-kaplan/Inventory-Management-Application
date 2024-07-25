import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProductProfile = () => {
	const { id } = useParams();

	const [product, setProduct] = useState({
		name: "",
		costPrice: "",
		sellingPrice: "",
		stockQuantity: "",
		productGroup: "",
		imageUrl: "",
	});

	useEffect(() => {
		loadProduct();
	}, []);

	useEffect(() => {
		console.log("Product Image URL:", product.imageUrl);
	}, [product.imageUrl]);


	const loadProduct = async () => {
		try {
			const result = await axios.get(
				`http://localhost:9192/products/product/${id}`
			);
			setProduct(result.data);

		} catch (error) {
			console.error("Error loading product:", error);
		}
	};

	return (
		<section className="shadow" style={{ backgroundColor: "whitesmoke" }}>
			<div className="container py-5">
				<div className="row">
					<div className="col-lg-3">
						<div className="card mb-4">
							<div className="card-body text-center">
								<img
									src={product.imageUrl}
									alt={product.name}
									style={{ width: 170 }}
								/>

								<h5 className="my-3">
									{product.name}
								</h5>
								<div className="d-flex justify-content-center mb-2">
									<button
										type="button"
										className="btn btn-outline-success"
									// Add your custom logic for handling the button click
									>
										Buy
									</button>

									<a
										href="#"
										className="btn btn-outline-primary ms-1"
									// Add your custom logic for handling the link click
									>
										More Info
									</a>
								</div>
							</div>
						</div>
					</div>

					<div className="col-lg-9">
						<div className="card mb-4">
							<div className="card-body">
								<hr />

								<div className="row">
									<div className="col-sm-3">
										<h5 className="mb-0">Name</h5>
									</div>

									<div className="col-sm-9">
										<p className="text-muted mb-0">{product.name}</p>
									</div>
								</div>

								<hr />

								<div className="row">
									<div className="col-sm-3">
										<h5 className="mb-0">Cost Price</h5>
									</div>

									<div className="col-sm-9">
										<p className="text-muted mb-0">{product.costPrice}</p>
									</div>
								</div>
								<hr />

								<div className="row">
									<div className="col-sm-3">
										<h5 className="mb-0">Selling Price</h5>
									</div>

									<div className="col-sm-9">
										<p className="text-muted mb-0">{product.sellingPrice}</p>
									</div>
								</div>
								<hr />

								<div className="row">
									<div className="col-sm-3">
										<h5 className="mb-0">Stock Quantity</h5>
									</div>

									<div className="col-sm-9">
										<p className="text-muted mb-0">{product.stockQuantity}</p>
									</div>
								</div>
								<hr />

								<div className="row">
									<div className="col-sm-3">
										<h5 className="mb-0">Product Group</h5>
									</div>

									<div className="col-sm-9">
										<p className="text-muted mb-0">{product.productGroup}</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ProductProfile;
