import Head from 'next/head';
import Image from 'next/image';
import Footer from '../components/footer';
import Navbar from '../components/navbar';

const About = () => {
  return (
    <div>
      <Head>
        <title>À Propos de SensVinylo | Votre Référence pour les Disques Vinyles</title>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta name="description" content="Découvrez l'histoire de SensVinylo, votre destination ultime pour l'achat de disques vinyles, l'exploration de collections uniques, et l'apprentissage de l'art du vinyle."/>
        <meta name="robots" content="index, follow" />
        <meta name="keywords" content="disques vinyles, magasin de vinyles, musique, albums, magasin de disques" />
        <link rel="canonical" href="http://localhost:3000/about" />
        <meta property="og:title" content="À Propos de SensVinylo | Votre Référence pour les Disques Vinyles" />
        <meta property="og:description" content="Découvrez l'histoire de SensVinylo, votre destination ultime pour l'achat de disques vinyles, l'exploration de collections uniques, et l'apprentissage de l'art du vinyle." />
        <meta property="og:image" content="https://www.sensvinylo.com/images/sensvinylo-about.jpg" />
        <meta property="og:url" content="https://www.sensvinylo.com/about" />
      </Head>
      <Navbar />
      <div className="max-w-5xl mx-auto p-4 bg-white shadow-md rounded-lg">
        <h1 className="text-4xl font-bold mb-4">À Propos de SensVinylo</h1>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2">
            <Image
              src="/vinyl-record-vector.webp"
              width={500}
              height={500}
              alt="Disques Vinyles"
              className="rounded-lg"
            />
          </div>
          <div className="md:w-1/2">
            <p className="text-lg text-gray-700 mb-4">
            Bienvenue sur SensVinylo, votre nouvelle référence pour tout ce qui concerne le monde fascinant des disques vinyles ! Fondé avec la passion du vinyle et un désir de partager notre amour pour ce format unique, SensVinylo est plus qu&apos;un simple site de vente de vinyles. C&apos;est un lieu de découverte, de collection et d&apos;exploration musicale.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              Fond&eacute; en 2021, SensVinylo a parcouru un long chemin depuis ses d&eacute;buts. Lorsque nous avons commenc&eacute;, notre passion pour les disques vinyles nous a pouss&eacute;s &agrave; cr&eacute;er notre propre entreprise.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              Chez SensVinylo, nous croyons que chaque disque vinyle a une histoire à raconter. Nous nous spécialisons dans la sélection de vinyles rares, d&apos;albums vinyles classiques et de nouveautés passionnantes pour les collectionneurs et les mélomanes. Notre mission est de vous offrir une expérience d&apos;achat exceptionnelle avec des produits de qualité et un service client attentif.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              Nous esp&eacute;rons que vous appr&eacute;cierez nos produits autant que nous aimons vous les offrir. Si vous avez des questions ou des commentaires, n&apos;h&eacute;sitez pas &agrave; nous contacter.
            </p>
            <p className="text-lg text-gray-700">
              Cordialement, <br />
              L&apos;&eacute;quipe de SensVinylo
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
