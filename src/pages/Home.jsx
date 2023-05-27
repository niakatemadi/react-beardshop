import Header from "../components/ui/Header";
import ProductCard from "../components/ui/ProductCard";

function Home(){

return (
    <>
        <Header />
        <div className="ProductContainer" style={{display: "flex",justifyContent: "space-around"}} >  <ProductCard/>  <ProductCard/></div>     
    </>
)
}

export default Home;