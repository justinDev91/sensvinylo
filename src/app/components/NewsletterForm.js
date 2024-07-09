import React from 'react';

const NewsletterForm = () => {
  return (
    <section className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg" aria-labelledby="newsletter-heading">
      <h2 id="newsletter-heading" className="text-2xl font-bold text-center mb-6 text-gray-800">Abonnez-vous &agrave; notre Newsletter</h2>
      <form method="post" action="/subscribe">
        <label htmlFor="email" className="sr-only">Adresse e-mail</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Votre adresse e-mail"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-blue-500 transition duration-300"
          required
        />
        <button
          type="submit"
          className="w-full py-3 bg-blue-700 text-white font-semibold rounded-lg hover:bg-blue-800 transition duration-300"
        >
          S&apos;abonner
        </button>
      </form>
    </section>
  );
};

export default NewsletterForm;
