import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaEdit, FaEye, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import Search from "../common/Search";

const ProductsView = () => {
	const [products, setProducts] = useState([]);
	const [search, setSearch] = useState("");

	useEffect(() => {
		loadProducts();
	}, []);

	const loadProducts = async () => {
		const result = await axios.get(
			"http://localhost:9192/products",
			{
				validateStatus: () => {
					return true;
				},
			}
		);
		if (result.status === 302) {
			setProducts(result.data);
		}
	};

	const handleDelete = async (id) => {
		await axios.delete(
			`http://localhost:9192/products/delete/${id}`
		);
		loadProducts();
	};

	return (
		<section>
			<Search search={search} setSearch={setSearch} />
			<table className="table table-bordered table-hover shadow">
				<thead>
					<tr className="text-center">
						<th>ID</th>
						<th>Name</th>
						<th>Cost Price</th>
						<th>Selling Price</th>
						<th>Stock Quantity</th>
						<th>Product Group</th>
						<th colSpan="3">Actions</th>
					</tr>
				</thead>

				<tbody className="text-center">
					{products
						.filter((product) =>
							product.name.toLowerCase().includes(search.toLowerCase()) ||
							product.productGroup.toLowerCase().includes(search.toLowerCase())
						)
						.map((product, index) => (
							<tr key={product.id}>
								<th scope="row" key={index}>
									{index + 1}
								</th>
								<td>{product.name}</td>
								<td>{product.costPrice}</td>
								<td>{product.sellingPrice}</td>
								<td>{product.stockQuantity}</td>
								<td>{product.productGroup}</td>
								<td className="mx-2">
									<Link
										to={`/product-profile/${product.id}`}
										className="btn btn-info"
									>
										<FaEye />
									</Link>
								</td>
								<td className="mx-2">
									<Link
										to={`/edit-product/${product.id}`}
										className="btn btn-warning"
									>
										<FaEdit />
									</Link>
								</td>
								<td className="mx-2">
									<button
										className="btn btn-danger"
										onClick={() => handleDelete(product.id)}
									>
										<FaTrashAlt />
									</button>
								</td>
							</tr>
						))}
				</tbody>
			</table>
		</section>
	);
};

export default ProductsView;
