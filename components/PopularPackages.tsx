import Image from 'next/image';

const PopularPackages = () => {
  const packages = [
    { city: 'Paris', price: '$999', img: '/images/paris.jpg' },
    { city: 'Greece', price: '$899', img: '/images/greece.jpg' },
    { city: 'USA', price: '$1099', img: '/images/usa.jpg' },
    { city: 'Dubai', price: '$799', img: '/images/dubai.jpg' },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Popular Packages</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {packages.map(({ city, price, img }) => (
            <div key={city} className="relative h-64 rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105">
              <Image src={img} alt={city} layout="fill" objectFit="cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent flex items-end p-4">
                <h3 className="text-white text-xl font-bold">{city} {price}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularPackages;
