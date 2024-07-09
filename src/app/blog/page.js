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
        <title>Vinyl Blog - Your Ultimate Source for Vinyl Records</title>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta name="description" content="Discover the latest vinyl records, promotions, and articles on our blog. Subscribe to our newsletter for updates!" />
        <meta name="keywords" content="vinyl records, new vinyl releases, vinyl promotions, vinyl blog, music articles" />
      </Head>
      <Navbar />
      <main className="max-w-5xl mx-auto px-4 py-8">
       <section className="mb-8">
          <h1 className="text-3xl font-bold mb-4">Latest Articles</h1>
          <BlogPostList />
        </section>
        <section className="mb-8">
          <h1 className="text-3xl font-bold mb-4">New Products</h1>
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
