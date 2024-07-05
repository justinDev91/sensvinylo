"use client"

import Footer from '@/app/components/footer';
import Navbar from '@/app/components/navbar';
import vinylData from '@/app/data/vinylData';

import Image from 'next/image';

const ProductOverview = ({params}) => {
  const slug  = params.slug;

  const product = slug ? vinylData.availableProducts.find(product => product.slug === slug) : null;

  const selectedSize = "S";


  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  if (!product) {
    return <div>Chargement...</div>; 
  }

  return (
    <div>
      <Navbar />
      <div className="max-w-5xl m-8 mx-auto p-4 bg-white shadow-md rounded-lg">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2">
            <Image
              src={product.image}
              width={500}
              height={500}
              alt={product.name}
              className="rounded-lg"
            />
            <div className="flex gap-4 mt-4">
              {/* Images supplémentaires si disponibles */}
              {/* Remplacez par les images réelles des produits */}
              <Image
                src="/vinyl-record-vector.webp"
                width={100}
                height={100}
                alt="Image supplémentaire 1"
                className="rounded-lg"
              />
              <Image
                src="/vinyle-classic-rock.png"
                width={100}
                height={100}
                alt="Image supplémentaire 2"
                className="rounded-lg"
              />
            </div>
          </div>
          <div className="md:w-1/2">
            <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
            <div className="flex items-center mb-4">
              <div className="text-yellow-500">⭐⭐⭐⭐⭐</div>
              <span className="ml-2 text-gray-600">(100 avis)</span>
            </div>
            <div className="text-2xl font-semibold text-gray-800 mb-4">{product.price.toFixed(2)} €</div>
            <div className="mb-4">
              <h2 className="text-xl text-black font-semibold mb-2">Taille</h2>
              <div className="flex gap-2">
                {['S', 'M', 'L', 'XL'].map((size) => (
                  <button
                    key={size}
                    onClick={() => handleSizeClick(size)}
                    className={`px-4 py-2 text-black border rounded-lg ${selectedSize === size ? 'border-blue-500' : 'border-gray-300'}`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
            <div className="mb-4">
              <h2 className="text-xl font-semibold mb-2 text-black">Description</h2>
              <p className="text-gray-700">{product.description}</p>
            </div>
            <div className="mb-4">
              <h2 className="text-xl font-semibold mb-2 text-black">Options de livraison</h2>
              <p className="text-gray-700">Livraison standard, Livraison express, Livraison le lendemain</p>
            </div>
            <button className="w-full py-3 bg-blue-500 text-black font-semibold rounded-lg mt-4">Ajouter au panier</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductOverview;

