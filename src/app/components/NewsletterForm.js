const NewsletterForm = () => {

  return (
    <form  className="max-w-md mx-auto">
      <input type="email" placeholder="Your Email Address" className="w-full px-4 py-2 border rounded-lg mb-4" required />
      <button type="submit" className="w-full py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600">
        Subscribe
      </button>
    </form>
  );
};

export default NewsletterForm;