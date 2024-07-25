import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "/node_modules/bootstrap/dist/js/bootstrap.min.js";
import "./App.css";
import Home from "./Home";
import ProductsView from "./component/product/ProductsView";
import NavBar from "./component/common/NavBar";
import {
	BrowserRouter as Router,
	Routes,
	Route,
} from "react-router-dom";
import AddProduct from "./component/product/AddProduct";
import EditProduct from "./component/product/EditProduct";
import ProductProfile from "./component/product/ProductProfile";

function App() {
	return (
		<main className="container mt-5">
			<Router>
				<NavBar />
				<Routes>
					<Route
						exact
						path="/"
						element={<Home />}></Route>
					<Route
						exact
						path="/view-products"
						element={<ProductsView />}></Route>
					<Route
						exact
						path="/add-products"
						element={<AddProduct />}></Route>
					<Route
						exact
						path="/edit-product/:id"
						element={<EditProduct />}></Route>
					<Route
						exact
						path="/product-profile/:id"
						element={<ProductProfile />}></Route>
				</Routes>
			</Router>
		</main>
	);
}

export default App;
