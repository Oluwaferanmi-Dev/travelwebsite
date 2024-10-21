import Image from 'next/image';

const InternationalPackages = () => {
  const packages = ['Bangkok', 'Hawaii', 'Mauritius', 'Dubai'];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">International Packages</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {packages.map((location) => (
            <div key={location} className="bg-white rounded-lg shadow-md overflow-hidden transition-shadow hover:shadow-lg">
              <Image
                src={`/images/${location.toLowerCase().replace(/ /g, '-')}.jpg`}
                alt={`${location} Adventure`}
                className="w-full h-48 object-cover"
                width={300}
                height={200}
                loading="lazy"
              />
              <div className="p-4">
                <h3 className="font-bold text-lg">{location} Adventure</h3>
                <p className="text-gray-600 mt-2">4 days, 3 nights</p>
                <button className="mt-4 w-full bg-teal-500 text-white py-2 rounded">Book Now</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InternationalPackages;
