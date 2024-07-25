import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";

const EditProduct = () => {
	let navigate = useNavigate();
	const { id } = useParams();

	const [product, setProduct] = useState({
		name: "",
		costPrice: "",
		sellingPrice: "",
		stockQuantity: "",
		productGroup: "",
		imageUrl: "",
	});
	const { name, costPrice, sellingPrice, stockQuantity, productGroup, imageUrl } = product;

	useEffect(() => {
		loadProduct();
	}, []);

	const loadProduct = async () => {
		try {
			const result = await axios.get(`http://localhost:9192/products/product/${id}`);
			setProduct(result.data);
		} catch (error) {
			console.error("Error loading product:", error);
		}
	};

	const handleInputChange = (e) => {
		setProduct({
			...product,
			[e.target.name]: e.target.value,
		});
	};

	const updateProduct = async (e) => {
		e.preventDefault();
		try {
			await axios.put(`http://localhost:9192/products/update/${id}`, product);
			navigate("/view-products");
		} catch (error) {
			console.error("Error updating product:", error);
		}
	};

	return (
		<div className="col-sm-8 py-2 px-5 offset-2 shadow">
			<h2 className="mt-5">Edit Product</h2>
			<form onSubmit={(e) => updateProduct(e)}>
				<div className="input-group mb-5">
					<label className="input-group-text" htmlFor="name">
						Product Name
					</label>
					<input
						className="form-control col-sm-6"
						type="text"
						name="name"
						id="name"
						required
						value={name}
						onChange={(e) => handleInputChange(e)}
					/>
				</div>

				<div className="input-group mb-5">
					<label className="input-group-text" htmlFor="costPrice">
						Cost Price
					</label>
					<input
						className="form-control col-sm-6"
						type="number"
						step="0.01"
						name="costPrice"
						id="costPrice"
						required
						value={costPrice}
						onChange={(e) => handleInputChange(e)}
					/>
				</div>

				<div className="input-group mb-5">
					<label className="input-group-text" htmlFor="sellingPrice">
						Selling Price
					</label>
					<input
						className="form-control col-sm-6"
						type="number"
						step="0.01"
						name="sellingPrice"
						id="sellingPrice"
						required
						value={sellingPrice}
						onChange={(e) => handleInputChange(e)}
					/>
				</div>

				<div className="input-group mb-5">
					<label className="input-group-text" htmlFor="stockQuantity">
						Stock Quantity
					</label>
					<input
						className="form-control col-sm-6"
						type="number"
						name="stockQuantity"
						id="stockQuantity"
						required
						value={stockQuantity}
						onChange={(e) => handleInputChange(e)}
					/>
				</div>

				<div className="input-group mb-5">
					<label className="input-group-text" htmlFor="productGroup">
						Product Group
					</label>
					<input
						className="form-control col-sm-6"
						type="text"
						name="productGroup"
						id="productGroup"
						required
						value={productGroup}
						onChange={(e) => handleInputChange(e)}
					/>
				</div>

				<div className="input-group mb-5">
					<label className="input-group-text" htmlFor="imageUrl">
						Image URL
					</label>
					<input
						className="form-control col-sm-6"
						type="text"
						name="imageUrl"
						id="imageUrl"
						placeholder="Enter image URL"
						required
						value={imageUrl}
						onChange={(e) => handleInputChange(e)}
					/>
				</div>

				<div className="row mb-5">
					<div className="col-sm-2">
						<button type="submit" className="btn btn-outline-success btn-lg">
							Save
						</button>
					</div>

					<div className="col-sm-2">
						<Link to={"/view-products"} className="btn btn-outline-warning btn-lg">
							Cancel
						</Link>
					</div>
				</div>
			</form>
		</div>
	);
};

export default EditProduct;
