import Image from 'next/image';
import Head from 'next/head';

const About = () => {
  return (
    <div className="max-w-5xl mx-auto p-4 bg-white shadow-md rounded-lg">
      <Head>
        <title>&Agrave; propos de nous - Magasin de Vinyles</title>
        <meta name="description" content="D&eacute;couvrez plus sur Magasin de Vinyles, votre destination pour tous vos besoins en vinyles. Nous offrons une large gamme de disques vinyles de divers genres." />
        <meta name="keywords" content="disques vinyles, magasin de vinyles, musique, albums, magasin de disques" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="http://localhost:3000/about" />
      </Head>
      <h1 className="text-4xl font-bold mb-4">&Agrave; propos de Magasin de Vinyles</h1>
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
            Bienvenue &agrave; Magasin de Vinyles, votre source num&eacute;ro un pour tout ce qui concerne les vinyles. Nous nous engageons &agrave; vous fournir les meilleurs disques vinyles, avec un accent sur la qualit&eacute;, le service client et l&apos;unicité.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Fond&eacute; en 2021, Magasin de Vinyles a parcouru un long chemin depuis ses d&eacute;buts. Lorsque nous avons commenc&eacute;, notre passion pour les disques vinyles nous a pouss&eacute;s &agrave; cr&eacute;er notre propre entreprise.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Nous esp&eacute;rons que vous appr&eacute;cierez nos produits autant que nous aimons vous les offrir. Si vous avez des questions ou des commentaires, n&apos;h&eacute;sitez pas &agrave; nous contacter.
          </p>
          <p className="text-lg text-gray-700">
            Cordialement, <br />
            L&apos;&eacute;quipe de Magasin de Vinyles
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
