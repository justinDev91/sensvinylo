

import HomePageBanner from './components/HomePageBanner.js';
import NetworkLinks from './components/NetworkLinks.js';
import ProductList from './components/ProductList.js';
import Footer from './components/footer.js';
import Navbar from './components/navbar.js';
import SearchBar from './components/searchBar.js';


export default function Home() {

  return (
    <> 
      <div>
        <Navbar />
        <HomePageBanner />
        <div className="mt-8">
          <SearchBar />
        </div>
        <section className="mb-8">
          <h1 className="text-3xl m-10 font-bold mb-4">Produits</h1>
          <ProductList />
        </section>
        <section className="bg-gray-50 flex justify-center items-center h-full">
          <div className="max-w-7xl p-4 mx-auto sm:px-6 lg:px-8">
            <NetworkLinks />
          </div>
        </section>
        <Footer />
        </div>
    </>
  );
}