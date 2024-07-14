import ProductCard from './ProductCard';

const products = [
  {
    image: '/Flower1.jpg',
    title: '10 Mix Rose',
    price: 'Rs.799',
    buttonLabel: 'Buy Now',
  },
  {
    image: '/Flower2.jpg',
    title: '12 Exotic Gerberas in a Vase',
    price: 'Rs.999',
    buttonLabel: 'Buy Now',
  },
  {
    image: '/Flower3.jpg',
    title: '12 Red Rose Basket Arrangement',
    price: 'Rs.999',
    buttonLabel: 'Buy Now',
  },
  {
    image: '/Flower4.jpg',
    title: '12 Pink & White Gerberas',
    price: 'Rs.999',
    buttonLabel: 'Buy Now',
  },
];

const ProductList = () => {
  return (
    <div className="mt-10">
      <h2 className="text-2xl font-bold mb-4">Flowers</h2>
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

export default ProductList;
