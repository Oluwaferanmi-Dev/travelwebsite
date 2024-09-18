import Image from 'next/image';

const PopularPackages = () => {
  const packages = ['Paris', 'Greece', 'USA', 'Dubai'];

  return (
    <section className="py-16">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold text-gray-800 mb-8">Popular Packages</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {packages.map((city) => (
            <div key={city} className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src={`/images/${city.toLowerCase()}.jpg`}  // Ensure this path is correct
                alt={city}
                layout="fill"
                objectFit="cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent flex items-end p-4">
                <h3 className="text-white text-xl font-bold">{city} $999</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularPackages;
