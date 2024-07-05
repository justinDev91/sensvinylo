import Image from 'next/image';
import Head from 'next/head';
import Navbar from '../navbar';
import vinylData from '../data/vinylData';

const Genre = () => {
  const genres = [
    { id: 1, name: 'Rock', vinyls: vinylData.rock },
    { id: 2, name: 'Jazz', vinyls: vinylData.jazz },
  ];

  return (
    <>
      <Head>
        <title>Vinyls par Genre - Magasin de Vinyles</title>
        <meta name="description" content="Découvrez une sélection de disques vinyles classés par genre musical. Explorez nos collections de rock, jazz, et plus encore." />
        <meta name="keywords" content="vinyles par genre, vinyles rock, vinyles jazz, collections vinyles, magasin de vinyles" />
        <meta name="author" content="Magasin de Vinyles" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "ItemList",
            "itemListElement": genres.map((genre, index) => ({
              "@type": "ListItem",
              "position": index + 1,
              "item": {
                "@type": "Collection",
                "name": genre.name,
                "url": `https://www.votre-site.com/genres/${genre.name.toLowerCase().replace(' ', '-')}`,
                "itemListElement": genre.vinyls.map((vinyl, idx) => ({
                  "@type": "Product",
                  "@id": `https://www.votre-site.com/product/${vinyl.id}`,
                  "name": vinyl.name,
                  "image": `https://www.votre-site.com${vinyl.image}`,
                  "description": vinyl.description,
                  "sku": `${vinyl.id}`,
                  "offers": {
                    "@type": "Offer",
                    "url": `https://www.votre-site.com/product/${vinyl.id}`,
                    "priceCurrency": "USD",
                    "price": vinyl.price,
                    "itemCondition": "https://schema.org/NewCondition",
                    "availability": "https://schema.org/InStock"
                  }
                }))
              }
            }))
          })}
        </script>
      </Head>
      <div>
        <Navbar />
        <main className="max-w-5xl mt-8 mx-auto p-4 bg-white shadow-md rounded-lg">
          <h1 className="text-4xl text-black font-bold mb-8">Vinyls par Genre</h1>
          {genres.map(genre => (
            <div key={genre.id} className="mb-8">
              <h2 className="text-2xl text-black font-bold mb-4">{genre.name}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {genre.vinyls.map(vinyl => (
                  <div key={vinyl.id} className="border rounded-lg p-4">
                    <Image
                      src={vinyl.image}
                      alt={vinyl.name}
                      width={500}
                      height={500}
                      className="rounded-lg"
                      priority
                    />
                    <h3 className="text-xl font-bold mt-4 mb-2">{vinyl.name}</h3>
                    <p className="text-gray-700 mb-4">{vinyl.description}</p>
                    <div className="flex justify-between items-center">
                      <div className="text-2xl font-semibold text-gray-800">
                        {vinyl.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
                      </div>
                      <button className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600">
                        Ajouter au panier
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </main>
      </div>
    </>
  );
};

export default Genre;