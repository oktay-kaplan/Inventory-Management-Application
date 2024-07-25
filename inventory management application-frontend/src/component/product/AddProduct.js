import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const AddProduct = () => {
	let navigate = useNavigate();
	const [product, setProduct] = useState({
		name: "",
		costPrice: "",
		sellingPrice: "",
		stockQuantity: "",
		productGroup: "",
		imageUrl: "",
	});
	const { name, costPrice, sellingPrice, stockQuantity, productGroup, imageUrl } = product;

	const handleInputChange = (e) => {
		setProduct({
			...product,
			[e.target.name]: e.target.value,
		});
	};

	const saveProduct = async (e) => {
		e.preventDefault();
		try {
			await axios.post("http://localhost:9192/products", product);
			navigate("/view-products");
		} catch (error) {
			console.error("Error saving product:", error);
		}
	};

	return (
		<div className="col-sm-8 py-2 px-5 offset-2 shadow">
			<h2 className="mt-5">Add Product</h2>
			<form onSubmit={saveProduct}>
				<div className="input-group mb-5">
					<label className="input-group-text" htmlFor="name">
						Product Name
					</label>
					<input
						className="form-control col-sm-6"
						type="text"
						name="name"
						id="name"
						placeholder="Enter product name"
						required
						value={name}
						onChange={handleInputChange}
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
						placeholder="Enter cost price"
						required
						value={costPrice}
						onChange={handleInputChange}
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
						placeholder="Enter selling price"
						required
						value={sellingPrice}
						onChange={handleInputChange}
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
						placeholder="Enter stock quantity"
						required
						value={stockQuantity}
						onChange={handleInputChange}
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
						placeholder="Enter product group"
						required
						value={productGroup}
						onChange={handleInputChange}
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
						value={imageUrl}
						onChange={handleInputChange}
					/>
				</div>

				<div className="row mb-5">
					<div className="col-sm-2">
						<button type="submit" className="btn btn-outline-success btn-lg">
							Save
						</button>
					</div>

					<div className="col-sm-2">
						<Link
							to="/view-products"
							className="btn btn-outline-warning btn-lg"
						>
							Cancel
						</Link>
					</div>
				</div>
			</form>
		</div>
	);
};

export default AddProduct;
