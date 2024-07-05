import Image from 'next/image';

const ProductOverview = () => {
  const selectedSize = 'S'

  const handleSizeClick = (size) => {
    console.log("size", size)
  };
  return (
    <div className="max-w-5xl mx-auto p-4 bg-white shadow-md rounded-lg">
    <div className="flex flex-col md:flex-row gap-8">
      <div className="md:w-1/2">
        <Image
          src="/vinyl-jazz-collection.png"
          width={500}
          height={500}
          alt="Product Image"
          className="rounded-lg"
        />
        <div className="flex gap-4 mt-4">
          <Image
            src="/vinyl-record-vector.webp"
            width={100}
            height={100}
            alt="Additional Image 1"
            className="rounded-lg"
          />
          <Image
            src="/vinyle-classic-rock.png"
            width={100}
            height={100}
            alt="Additional Image 2"
            className="rounded-lg"
          />
        </div>
      </div>
      <div className="md:w-1/2">
        <h1 className="text-3xl font-bold mb-2">Product Name</h1>
        <div className="flex items-center mb-4">
          <div className="text-yellow-500">⭐⭐⭐⭐⭐</div>
          <span className="ml-2 text-gray-600">(100 reviews)</span>
        </div>
        <div className="text-2xl font-semibold text-gray-800 mb-4">$99.99</div>
        <div className="mb-4">
          <h2 className="text-xl text-black font-semibold mb-2">Size</h2>
          <div className="flex gap-2">
            {['S', 'M', 'L', 'XL'].map((size) => (
              <button
                key={size}
                onClick={handleSizeClick(size)}
                className={`px-4 py-2 text-black border rounded-lg ${selectedSize === size ? 'border-blue-500' : 'border-gray-300'}`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>
        <div className="mb-4">
          <h2 className="text-xl font-semibold mb-2 text-black">Description</h2>
          <p className="text-gray-700">This is a detailed description of the product. It includes all the information about the features and benefits of the product.</p>
        </div>
        <div className="mb-4">
          <h2 className="text-xl font-semibold mb-2 text-black">Shipment Options</h2>
          <p className="text-gray-700">Standard Shipping, Express Shipping, Next Day Delivery</p>
        </div>
        <button className="w-full py-3 bg-blue-500 text-black font-semibold rounded-lg mt-4">Add to Cart</button>
      </div>
    </div>
  </div>
  );
};

export default ProductOverview;
