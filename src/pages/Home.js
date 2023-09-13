import NavBar from "../features/navbar/Navbar";
import ProductList from "../features/product/components/ProductList";
// import ProductList from "../features/product-list/ProductList";

function Home() {
    return ( 
        <div>
            <NavBar/>
            <ProductList></ProductList>
          
        </div>
     );
}
export default Home