import Image from 'next/image';
import promotionData from '../data/promotionData';


const PromotionList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {promotionData.map(product => (
        <div key={product.id} className="border rounded-lg p-4">
          <Image
            src={product.image}
            width={500}
            height={500}
            alt={product.name}
            className="rounded-lg"
          />
          <h2 className="text-xl font-bold mt-4 mb-2">{product.name}</h2>
          <p className="text-gray-700">{product.description}</p>
        </div>
      ))}
    </div>
  );
};

export default PromotionList;
