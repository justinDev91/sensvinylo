import { Inter } from "next/font/google";
import Head from "next/head";
import "./globals.css";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  siteName: 'sensvinylo',
  generator: 'Next.js',
  applicationName: 'Next.js',
  title: "SensVinylo - Votre boutique préféré de vinyles en région parisienne",
  description: "Bienvenue sur SensVinylo,  notre boutique de vinyle ! Découvrez une large gamme de vinyles, des classiques aux dernières sorties.",
  url: "https://www.sensvinylo-musique.fr",
  image: "https://www.sensvinylo-musique.fr/vinyle-img.png",
  twitterUsername: "@sensvinylo",
  keywords: ['vinyle', 'musique', 'albums', 'classiques', 'nouvelles sorties', "platine vinyle", "lecteur vinyle", "adieu vinyle", "disque", "vente", "achat"],
  authors: [{ name: 'Justin' }, { name: 'Katasi', url: 'https://www.sensvinylo-musique.fr' }],
  openGraph: {
    title: 'SensVinylo',
    description: "Bienvenue sur SensVinylo,  notre boutique de vinyle ! Découvrez une large gamme de vinyles, des classiques aux dernières sorties.",
    url: "https://www.sensvinylo-musique.fr",
    siteName: 'SensVinylo',
    locale: 'fr_FR',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.sensvinylo-musique.fr',
    languages: {
      'fr_FR': '/fr_FR',
    },
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }) {

  return (
    <>
      <Head>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "website",
            "name": "sensvinylo",
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
      <html lang="fr">
        <body className={inter.className}>
          {children}
        </body>
      </html>
    </>
  );
}
