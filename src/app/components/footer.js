import Image from 'next/image';
import Link from 'next/link';
import NewsletterForm from './NewsletterForm';

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <Link href="/">
              <Image
                src="/vinyle-img.png"
                alt="Logo de sensvinylo, magasin de vinyle"
                width={100}
                height={30}
                className="footer-v1-logo"
              />
            </Link>
            <p className="text-gray-400 mt-4">
              Bienvenue sur SensVinylo,  notre magasin de vinyle ! D&eacute;couvrez une large gamme de vinyles, des classiques aux derni&egrave;res sorties.
            </p>
            <section className="my-4">
              <NewsletterForm />
            </section>
          </div>

          <div className="col-span-1 md:col-span-1">
            <div className="text-xl font-semibold mb-4 text-white">Menu</div>
            <ul className="space-y-2">
              <li>
                <Link href="/newproducts" className="flex items-center space-x-2 text-gray-400 hover:text-white">
                  <span>Classiques</span>
                </Link>
              </li>
              <li>
                <Link href="/newproducts" className="flex items-center space-x-2 text-gray-400 hover:text-white">
                  <span>Nouvelles Sorties</span>
                </Link>
              </li>
              <li>
                <Link href="/blog" className="flex items-center space-x-2 text-gray-400 hover:text-white">
                  <span>Conseils d&apos;entretien des vinyles</span>
                </Link>
              </li>
              <li>
                <Link href="/promotion" className="flex items-center space-x-2 text-gray-400 hover:text-white">
                  <span>Promotions</span>
                </Link>
              </li>
              <li>
                <Link href="/about" className="flex items-center space-x-2 text-gray-400 hover:text-white">
                  <span>&Agrave; propos de nous</span>
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-1 md:col-span-1">
            <div className="text-xl font-semibold mb-4 text-white">S&eacute;lection du moment</div>
            <ul className="space-y-4">
              <li>
                <div className="flex space-x-4">
                  <Link href="/newproducts">
                    <div className="h-20 w-20 relative">
                      <Image
                        src="/vinyl-red.png"
                        alt="Vinyle de Queen"
                        layout="fill"
                        objectFit="cover"
                        className="rounded-md"
                      />
                    </div>
                  </Link>
                  <div className="flex-1">
                    <Link href="/newproducts" className="text-lg font-semibold text-white hover:text-blue-500">
                      The Beatles - Abbey Road
                    </Link>
                    <div className="flex items-center space-x-2 mt-1 text-gray-400">
                      <span>Il y a 4 minutes</span>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex space-x-4">
                  <Link href="/newproducts">
                    <div className="h-20 w-20 relative">
                      <Image
                        src="/vinyl-yellow.jpg"
                        alt="Vinyle de Queen"
                        layout="fill"
                        objectFit="cover"
                        className="rounded-md"
                      />
                    </div>
                  </Link>
                  <div className="flex-1">
                    <Link href="/newproducts" className="text-lg font-semibold text-white hover:text-blue-500">
                      Pink Floyd - The Dark Side of the Moon
                    </Link>
                    <div className="flex items-center space-x-2 mt-1 text-gray-400">
                      <span>Il y a 6 minutes</span>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex space-x-4">
                  <Link href="/newproducts">
                    <div className="h-20 w-20 relative">
                      <Image
                        src="/vinyl-red.png"
                        alt="Vinyle de Queen"
                        layout="fill"
                        objectFit="cover"
                        className="rounded-md"
                      />
                    </div>
                  </Link>
                  <div className="flex-1">
                    <Link href="/newproducts" className="text-lg font-semibold text-white hover:text-blue-500">
                      Queen - Greatest Hits
                    </Link>
                    <div className="flex items-center space-x-2 mt-1 text-gray-400">
                      <span>Il y a 8 minutes</span>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <div className="col-span-1 md:col-span-1">
            <div className="text-xl font-semibold mb-4 text-white">Explorez</div>
            <ul className="space-y-4">
              <li>
                <div className="flex space-x-4">
                  <Link href="/newproducts">
                    <div className="h-20 w-20 relative">
                      <Image
                        src="/vinyle-classic-rock.png"
                        alt="Application Lecteur de Vinyle"
                        layout="fill"
                        objectFit="cover"
                        className="rounded-md"
                      />
                    </div>
                  </Link>
                  <div className="flex-1">
                    <Link href="/newproducts" className="text-lg font-semibold text-white hover:text-blue-500">
                      Application Lecteur de Vinyle
                    </Link>
                    <div className="flex items-center space-x-2 mt-1">
                      <div className="text-gray-400">&Eacute;coutez vos vinyles pr&eacute;f&eacute;r&eacute;s avec notre application.</div>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex space-x-4">
                  <Link href="/blog">
                    <div className="h-20 w-20 relative">
                      <Image
                        src="/vinyl-record-vector.webp"
                        alt="Application Quiz Vinyle"
                        layout="fill"
                        objectFit="cover"
                        className="rounded-md"
                      />
                    </div>
                  </Link>
                  <div className="flex-1">
                    <Link href="/blog" className="text-lg font-semibold text-white hover:text-blue-500">
                      Application Quiz Vinyle
                    </Link>
                    <div className="flex items-center space-x-2 mt-1">
                      <div className="text-gray-400">Testez vos connaissances des vinyles avec notre application de quiz.</div>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex space-x-4">
                  <Link href="/blog">
                    <div className="h-20 w-20 relative">
                      <Image
                        src="/vinyl-jazz-collection.png"
                        alt="Application Magasin de Vinyle"
                        layout="fill"
                        objectFit="cover"
                        className="rounded-md"
                      />
                    </div>
                  </Link>
                  <div className="flex-1">
                    <Link href="/newproducts" className="text-lg font-semibold text-white hover:text-blue-500">
                      Application Magasin de Vinyle
                    </Link>
                    <div className="flex items-center space-x-2 mt-1">
                      <div className="text-gray-400">Parcourez et achetez des vinyles en toute simplicit&eacute;.</div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
