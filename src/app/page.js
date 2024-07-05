
import Navbar from './navbar.js';
import SearchBar from './SearchBar.js';
import ProductOverview from "./productOverview.js";
import ProductCarousel from "./productCarousel.js";
import ShoppingCart from './shoppingCarts.js';
import ProductList from './components/ProductList.js';
import Footer from './footer.js';
import NetworkLinks from './NetworkLinks.js';

export default function Home() {
  // Create an array of 10 items
  const carts = Array.from({ length: 10 });

  return (
    <> 
      <div>
        <Navbar />
        <div className="mt-8">
          <SearchBar />
        </div>
        <section className="mb-8">
          <h1 className="text-3xl m-10 font-bold mb-4">Products</h1>
          <ProductList />
        </section>
        <div className="mt-8">
          <ProductOverview />
        </div>
        <div className="mt-8 bg-gray-100 py-8">
          <ProductCarousel />
      </div>
      {/* <div className="mt-8 bg-gray-100 py-8">
        <ShoppingCart />
      </div> */}
      <section className="bg-gray-50 flex justify-center items-center h-full">
        <div className="max-w-7xl pb-4 mx-auto sm:px-6 lg:px-8">
          <NetworkLinks />
        </div>
      </section>
      <Footer />
      </div>
    </>
  );
}