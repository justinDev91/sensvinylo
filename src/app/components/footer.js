import Image from 'next/image';
import NewsletterForm from './NewsletterForm';

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <a href="/" className="flex items-center space-x-2">
              <Image
                src="/vinyle-img.png"
                alt="Logo du magasin de vinyles"
                width={100}
                height={30}
                className="footer-v1-logo"
              />
            </a>
            <p className="text-gray-400 mt-4">
              Bienvenue sur notre magasin de vinyles ! Découvrez une large gamme de vinyles, des classiques aux dernières sorties.
            </p>
            <section className="my-4">
              <NewsletterForm />
          </section>
          </div>

          <div className="col-span-1 md:col-span-1">
            <div className="text-xl font-semibold mb-4 text-white">Menu</div>
            <ul className="space-y-2">
              <li>
                <a href="/categories/classiques" className="flex items-center space-x-2 text-gray-400 hover:text-white">
                  <span>Classiques</span>
                </a>
              </li>
              <li>
                <a href="/categories/nouvelles-sorties" className="flex items-center space-x-2 text-gray-400 hover:text-white">
                  <span>Nouvelles Sorties</span>
                </a>
              </li>
              <li>
                <a href="/blog/conseils" className="flex items-center space-x-2 text-gray-400 hover:text-white">
                  <span>Conseils d'entretien des vinyles</span>
                </a>
              </li>
              <li>
                <a href="/a-propos" className="flex items-center space-x-2 text-gray-400 hover:text-white">
                  <span>À propos de nous</span>
                </a>
              </li>
            </ul>
          </div>

          <div className="col-span-1 md:col-span-1">
            <div className="text-xl font-semibold mb-4 text-white">Sélection du moment</div>
            <ul className="space-y-4">
              <li>
                <div className="flex space-x-4">
                  <a href="/vinyles/beatles">
                    <div className="h-20 w-20 relative">
                      <Image
                          src="/vinyl-red.png"
                          alt="Vinyle de Queen"
                          layout="fill"
                          objectFit="cover"
                          className="rounded-md"
                        />
                    </div>
                  </a>
                  <div className="flex-1">
                    <a href="/vinyles/beatles" className="text-lg font-semibold text-white hover:text-blue-500">
                      The Beatles - Abbey Road
                    </a>
                    <div className="flex items-center space-x-2 mt-1 text-gray-400">
                      <span>Il y a 4 minutes</span>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex space-x-4">
                  <a href="/vinyles/pink-floyd">
                    <div className="h-20 w-20 relative">
                      <Image
                        src="/vinyl-yellow.jpg"
                        alt="Vinyle de Queen"
                        layout="fill"
                        objectFit="cover"
                        className="rounded-md"
                      />
                    </div>
                  </a>
                  <div className="flex-1">
                    <a href="/vinyles/pink-floyd" className="text-lg font-semibold text-white hover:text-blue-500">
                      Pink Floyd - The Dark Side of the Moon
                    </a>
                    <div className="flex items-center space-x-2 mt-1 text-gray-400">
                      <span>Il y a 6 minutes</span>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex space-x-4">
                  <a href="/vinyles/queen">
                    <div className="h-20 w-20 relative">
                      <Image
                        src="/vinyl-red.png"
                        alt="Vinyle de Queen"
                        layout="fill"
                        objectFit="cover"
                        className="rounded-md"
                      />
                    </div>
                  </a>
                  <div className="flex-1">
                    <a href="/vinyles/queen" className="text-lg font-semibold text-white hover:text-blue-500">
                      Queen - Greatest Hits
                    </a>
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
                  <a href="/apps/lecteur-vinyle">
                    <div className="h-20 w-20 relative">
                      <Image
                        src="/vinyle-classic-rock.png"
                        alt="Application Lecteur de Vinyle"
                        layout="fill"
                        objectFit="cover"
                        className="rounded-md"
                      />
                    </div>
                  </a>
                  <div className="flex-1">
                    <a href="/apps/lecteur-vinyle" className="text-lg font-semibold text-white hover:text-blue-500">
                      Application Lecteur de Vinyle
                    </a>
                    <div className="flex items-center space-x-2 mt-1">
                      <div className="text-gray-400">Écoutez vos vinyles préférés avec notre application.</div>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex space-x-4">
                  <a href="/apps/quiz-vinyle">
                    <div className="h-20 w-20 relative">
                      <Image
                        src="/vinyl-record-vector.webp"
                        alt="Application Quiz Vinyle"
                        layout="fill"
                        objectFit="cover"
                        className="rounded-md"
                      />
                    </div>
                  </a>
                  <div className="flex-1">
                    <a href="/apps/quiz-vinyle" className="text-lg font-semibold text-white hover:text-blue-500">
                      Application Quiz Vinyle
                    </a>
                    <div className="flex items-center space-x-2 mt-1">
                      <div className="text-gray-400">Testez vos connaissances des vinyles avec notre application de quiz.</div>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex space-x-4">
                  <a href="/apps/magasin-vinyle">
                    <div className="h-20 w-20 relative">
                      <Image
                        src="/vinyl-jazz-collection.png"
                        alt="Application Magasin de Vinyle"
                        layout="fill"
                        objectFit="cover"
                        className="rounded-md"
                      />
                    </div>
                  </a>
                  <div className="flex-1">
                    <a href="/apps/magasin-vinyle" className="text-lg font-semibold text-white hover:text-blue-500">
                      Application Magasin de Vinyle
                    </a>
                    <div className="flex items-center space-x-2 mt-1">
                      <div className="text-gray-400">Parcourez et achetez des vinyles en toute simplicité.</div>
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
