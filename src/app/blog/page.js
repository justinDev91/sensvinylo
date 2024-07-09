import Head from 'next/head';

import NewsletterForm from '../components/NewsletterForm';
import ProductList from '../components/ProductList';

import BlogPostList from '../components/BlogPostList';
import PromotionList from '../components/PromotionList';
import Footer from '../components/footer';
import Navbar from '../components/navbar';

const Blog = () => {
  return (
    <div>
      <Head>
        <title>SensVinylo - Blog</title>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta name="description" content="Découvrez les derniers disques vinyles, promotions et articles sur notre blog. Inscrivez-vous à notre newsletter pour recevoir les dernières nouvelles !" />
        <meta name="keywords" content="disques vinyles, nouvelles sorties vinyles, promotions vinyles, blog vinyle, articles musique" />
      </Head>
      <Navbar />
      <main className="max-w-5xl mx-auto px-4 py-8">
       <section className="mb-8">
          <h1 className="text-3xl font-bold mb-4">Derniers articles</h1>
          <BlogPostList />
        </section>
        <section className="mb-8">
          <h1 className="text-3xl font-bold mb-4">Nouveaux produits</h1>
          <ProductList />
        </section>
        <section className="mb-8">
          <h1 className="text-3xl font-bold mb-4">Promotions</h1>
          <PromotionList />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
