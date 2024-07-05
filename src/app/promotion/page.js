'use client';
import Image from 'next/image';
import Head from 'next/head';
import { useState, useEffect } from 'react';
import Navbar from '../navbar';

const Promotions = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts([
      {
        id: 1,
        name: "Vinyle Classic Rock",
        image: "/vinyle-classic-rock.png",
        price: 29.99,
        originalPrice: 49.99,
        rating: 4.5,
        reviewCount: 150,
        description: "Explore the nostalgic sounds of classic rock with this vinyl record collection. Featuring iconic bands and memorable tracks, it's a must-have for music enthusiasts.",
        features: ["High-quality sound", "Limited edition", "Authentic recordings"],
        benefits: "Perfect for collectors and those who appreciate the rich history of classic rock music.",
      },
      {
        id: 2,
        name: "Vinyle Jazz Collection",
        image: "/vinyl-jazz-collection.png",
        price: 19.99,
        originalPrice: 39.99,
        rating: 4.7,
        reviewCount: 80,
        description: "Indulge in the smooth melodies of jazz with this exquisite vinyl collection. Handpicked tracks from jazz legends ensure a relaxing and sophisticated listening experience.",
        features: ["Premium vinyl material", "Exceptional sound clarity", "Unique jazz compositions"],
        benefits: "Enhance your vinyl collection with timeless jazz classics that captivate and soothe the senses.",
      }
    ]);
  }, []);

  return (
    <>
      <Head>
        <title>Promotions - Magasin de Vinyles</title>
        <meta name="description" content="Découvrez nos offres promotionnelles sur une sélection de disques vinyles. Profitez des réductions pour enrichir votre collection de musique." />
        <meta name="keywords" content="promotions vinyles, offres spéciales, vinyles pas chers, réductions vinyles" />
        <meta name="author" content="Magasin de Vinyles" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "ItemList",
            "itemListElement": products.map((product, index) => ({
              "@type": "Product",
              "@id": `https://www.votre-site.com/product/${product.id}`,
              "name": product.name,
              "image": `https://www.votre-site.com${product.image}`,
              "description": product.description,
              "sku": `${product.id}`,
              "brand": {
                "@type": "Brand",
                "name": "Magasin de Vinyles"
              },
              "offers": {
                "@type": "Offer",
                "url": `https://www.votre-site.com/product/${product.id}`,
                "priceCurrency": "USD",
                "price": product.price,
                "priceValidUntil": "2024-12-31",
                "itemCondition": "https://schema.org/NewCondition",
                "availability": "https://schema.org/InStock"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": product.rating,
                "reviewCount": product.reviewCount
              }
            }))
          })}
        </script>
      </Head>
      <div>
        <Navbar />
        <main className="max-w-5xl mx-auto p-4 bg-white shadow-md rounded-lg">
          <h1 className="text-4xl text-black font-bold mb-8">Promotions</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map(product => (
              <div key={product.id} className="border rounded-lg p-4">
                <Image
                  src={product.image}
                  width={500}
                  height={500}
                  alt={product.name}
                  className="rounded-lg"
                  priority
                />
                <h2 className="text-xl font-bold mt-4 mb-2">{product.name}</h2>
                <div className="flex items-center mb-4">
                  <div className="text-yellow-500">
                    {Array.from({ length: Math.floor(product.rating) }, (_, index) => (
                      <span key={index}>⭐</span>
                    ))}
                  </div>
                  <span className="ml-2 text-gray-600">({product.reviewCount} avis)</span>
                </div>
                <p className="text-gray-700 mb-4">{product.description}</p>
                <div className="mb-4">
                  <h3 className="text-lg font-semibold mb-2 text-black">Caractéristiques</h3>
                  <ul className="list-disc list-inside text-gray-700">
                    {product.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
                <p className="text-gray-700 mb-4">{product.benefits}</p>
                <div className="flex justify-between items-center">
                  <div className="text-2xl font-semibold text-gray-800">
                    {product.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
                    {product.originalPrice && (
                      <span className="ml-2 text-sm text-gray-400 line-through">
                        {product.originalPrice.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
                      </span>
                    )}
                  </div>
                  <button className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600">
                    Ajouter au panier
                  </button>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </>
  );
};

export default Promotions;
