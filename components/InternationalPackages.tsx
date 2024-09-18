import Image from 'next/image';

const InternationalPackages = () => {
  const packages = ['Bangkok', 'Hawaii', 'Swiss_Peaks', 'Dubai'];

  return (
    <section className="py-16">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold text-gray-800 mb-8">International Packages</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {packages.map((location) => (
            <div key={location} className="bg-white rounded-lg shadow-md">
              <Image
                src={`/images/${location.toLowerCase().replace(/ /g, '-')}.jpg`}  // Adjust path for spaces
                alt={location}
                className="rounded-t-lg"
                width={300}
                height={200}
              />
              <div className="p-4">
                <h3 className="font-bold">{location} Adventure</h3>
                <p className="text-gray-600 mt-2">4 days, 3 nights</p>
              </div>
              <div className="p-4">
                <button className="w-full bg-teal-500 text-white py-2 rounded">Book Now</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InternationalPackages;
