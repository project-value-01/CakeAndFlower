import ProductCard from './ProductCard';

const products = [
  {
    image: '/Combo1.webp',
    title: 'Cute Choclate Love',
    price: 'Rs.1699',
    buttonLabel: 'Buy Now',
  },
  {
    image: '/Combo2.webp',
    title: 'Elegant Ivory',
    price: 'Rs.1599',
    buttonLabel: 'Buy Now',
  },
  {
    image: '/Combo3.webp',
    title: 'Beautiful Rose Basket',
    price: 'Rs.599',
    buttonLabel: 'Buy Now',
  },
  {
    image: '/Combo4.webp',
    title: 'Combo of Gerberas',
    price: 'Rs.1699',
    buttonLabel: 'Buy Now',
  },
];

const ComboPackList = () => {
  return (
    <div className="mt-10">
      <h2 className="text-2xl font-bold mb-4">Combo Packs</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            image={product.image}
            title={product.title}
            price={product.price}
            buttonLabel={product.buttonLabel}
          />
        ))}
      </div>
    </div>
  );
};

export default ComboPackList;
