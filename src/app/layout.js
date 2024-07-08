import { Inter } from "next/font/google";
import Head from "next/head";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const metadata = {
    title: "Magasin de Vinyles - Achetez des vinyles classiques et des nouveautés",
    description: "Bienvenue sur notre magasin de vinyles ! Découvrez une large gamme de vinyles, des classiques aux dernières sorties.",
    url: "https://www.sensvinylo-musique.fr",
    image: "https://www.sensvinylo-musique.fr/vinyle-img.png",
  };

  return (
    <>
      <Head>
      <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width" />
        <title>{metadata.title}</title>
        <meta name="robots" content="index,follow" />
        <meta name="description" content={metadata.description} />
        <meta name="twitter:site" content="@sensvinylo" />
        <meta name="twitter:creator" content="@sensvinylo" />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:url" content={metadata.url} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={metadata.image} />
        <meta property="og:image:alt" content="Magasin de Vinyles - Achetez des vinyles classiques et des nouveautés" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="628" />
        <meta property="og:locale" content="fr_FR" />
        <meta property="og:site_name" content="Magasin de Vinyles" />
        <link rel="canonical" href={metadata.url} />
        <meta name="keywords" content="vinyles, musique, albums, classiques, nouvelles sorties" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Magasin de Vinyles",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "242 Rue du Faubourg Saint-Antoine",
              "addressLocality": "Paris",
              "addressRegion": "île-de-france",
              "postalCode": "75012",
              "addressCountry": "France"
            },
            "telephone": "",
            "url": "https://www.sensvinylo-musique.fr",
            "image": "https://www.sensvinylo-musique.fr/vinyle-img.png",
            "priceRange": "$$",
            "openingHours": "Mo,Tu,We,Th,Fr 09:00-18:00",
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "48.84975051",
              "longitude": "2.386979"
            }
          })}
        </script>
      </Head>
      <html lang="en">
        <body className={inter.className}>
          {children}
        </body>
      </html>
    </>
  );
}
