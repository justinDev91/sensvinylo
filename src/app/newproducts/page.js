'use client';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '../components/footer';
import Navbar from '../components/navbar';
import vinylData from '../data/vinylData';

const NewProducts = () => {
  const products = vinylData.promotions;

  return (
    <>
      <Head>
        <title>Nouveautés - SensVinylo</title>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta name="description" content="Découvrez nos nouvelles arrivées de vinyles. Profitez de nos collections de vinyles de qualité supérieure pour enrichir votre expérience musicale." />
        <meta name="keywords" content="nouveautés vinyles, vinyles récents, vinyles de qualité, vinyles à collectionner" />
        <meta name="author" content="SensVinylo" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "ItemList",
            "itemListElement": products.map((product, index) => ({
              "@type": "Product",
              "@id": `https://www.sensvinylo-musique.fr/product/${product.id}`,
              "name": product.name,
              "image": `https://www.sensvinylo-musique.fr/${product.image}`,
              "description": product.description,
              "sku": `${product.id}`,
              "brand": {
                "@type": "Brand",
                "name": "Magasin de Vinyles"
              },
              "offers": {
                "@type": "Offer",
                "url": `https://www.sensvinylo-musique.fr/product/${product.id}`,
                "priceCurrency": "USD",
                "price": product.price,
                "priceValidUntil": "2024-12-31",
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
        <main className="max-w-5xl mt-8 mx-auto p-4 bg-white shadow-md rounded-lg">
          <h1 className="text-4xl text-black font-bold mb-8">Nouveautés</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map(product => (
              <div key={product.id} className="border rounded-lg p-4">
                <Link href={`/product/${product.slug}`}>
                  <Image
                    src={product.image}
                    width={500}
                    height={500}
                    alt={product.name}
                    className="rounded-lg"
                    priority
                  />
                  </Link>
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
        <Footer />
      </div>
    </>
  );
};

export default NewProducts;
