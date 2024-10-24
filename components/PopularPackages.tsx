import Image from 'next/image';

const PopularPackages = () => {
  const packages = [
    { city: 'Lagos', img: '/images/lekki-ikoyi.jpg' },
    { city: 'Cross Rivers', img: '/images/obudu.jpg' },
    { city: 'Abuja', img: '/images/Abuja.jpg' },
    { city: 'Calabar', img: '/images/Calabar.jpg' },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Popular Packages</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {packages.map(({ city, img }) => (
            <div key={city} className="rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105">
              <div className="relative h-64"> {/* Set your desired height */}
                <Image
                  src={img}
                  alt={`Beautiful view of ${city}`}
                  fill // Use fill prop for responsive images
                  className="object-cover" // CSS class to manage object fit
                  loading="lazy"
                />
              </div>
              <div className="bg-white p-4 text-center">
                <h3 className="text-xl font-bold text-gray-800">{city}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularPackages;
