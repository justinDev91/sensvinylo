import Image from 'next/image';

const HomePageBanner = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center text-center md:text-left bg-gray-100 p-6 md:p-12 relative">
  <div className="flex-1 mb-6 md:mb-0 md:mr-8">
    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
      Bienvenue chez SensVinylo !
    </h2>
    <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
      Découvrez <strong>SensVinylo</strong>, votre boutique en ligne spécialisée dans les <strong>vinyles rares</strong>, les <strong>albums de collection</strong> et les <strong>disques vinyles neufs</strong>. Nous proposons une large sélection de <strong>vinyles de qualité</strong>, allant des <strong>classiques du rock</strong> aux <strong>albums de jazz</strong> et <strong>disques de musique électronique</strong>. Que vous soyez un <strong>collectionneur passionné</strong> ou un amateur de musique en quête de <strong>nouveaux albums</strong>, vous trouverez chez nous les <strong>meilleurs vinyles</strong> pour enrichir votre collection. Profitez également de nos <strong>offres exclusives</strong> et de notre <strong>service client</strong> dédié pour une expérience d&apos;achat exceptionnelle. Explorez dès maintenant notre <strong>catalogue de vinyles</strong> et laissez-vous séduire par l&apos;univers fascinant du <strong>vinyle</strong> !
    </p>
    <p className="text-lg md:text-xl text-gray-700 leading-relaxed mt-6">
      Visitez également notre <a href="/blog" className="text-blue-600 hover:text-blue-800 font-semibold" aria-label='Blog'>blog</a> pour des articles passionnants sur le monde des vinyles, des critiques d&apos;albums et des conseils pour les collectionneurs.
    </p>
  </div>
</section>
  );
};

export default HomePageBanner;