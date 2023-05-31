import { useEffect, useState } from "react";
import Header from "../components/ui/Header";
import ProductCard from "../components/ui/ProductCard";
import "../styles/pages/Home.scss";
import SignUpForm from "../components/form/SignUpForm";

function Home({productCategory,setProductsFilteredByCategory, productsFilteredByCategory}){

    const [allProducts, setAllProducts] = useState([]);
    const displayedProducts = productsFilteredByCategory?.length > 0 ? productsFilteredByCategory : allProducts;

    useEffect(() => {
        fetch("http://localhost:4000/products/getAllProducts").then((response) => response.json()).then((datas) => setAllProducts(datas));
    },[]);

    useEffect(() => {
        const url = `http://localhost:4000/products/${productCategory}`;
       fetch(url).then((response) => response.json()).then((datas) => setProductsFilteredByCategory(datas));
    },[productCategory]);

    
return (
    <>
        <div className="ProductContainer" > {    
            displayedProducts.map((product, index) => <ProductCard title={product.title} price={product.price} description={product.description} key={index}/>)
        }</div>
    </>
)
}

export default Home;