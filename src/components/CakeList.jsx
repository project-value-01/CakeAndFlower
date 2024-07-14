import ProductCard from './ProductCard';

const products = [
  {
    image: '/Cake4.jpg',
    title: 'Half Kg Black Forest Cake',
    price: 'Rs.599',
    buttonLabel: 'Buy Now',
  },
  {
    image: '/Cake5.jpg',
    title: '1/2 Kg Pineapple Cake',
    price: 'Rs.599',
    buttonLabel: 'Buy Now',
  },
  {
    image: '/Cake6.jpg',
    title: '1/2 Kg Pineapple Cake',
    price: 'Rs.599',
    buttonLabel: 'Buy Now',
  },
  {
    image: '/Cake7.jpg',
    title: 'Photo Cake (1.5 Kg)',
    price: 'Rs.1699',
    buttonLabel: 'Buy Now',
  },
];

const CakeList = () => {
  return (
    <div className="mt-10">
      <h2 className="text-2xl font-bold mb-4">Cakes</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            image={product.image}
            title={product.title}x
            price={product.price}
            buttonLabel={product.buttonLabel}
          />
        ))}
      </div>
    </div>
  );
};

export default CakeList;
