import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import Image from 'next/image';

const DestinationsPage = () => {
  return (
    <>
      <Header />
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 md:px-8">
          <h1 className="text-4xl font-bold text-center mb-12">Explore Our Destinations</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Destination 1 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <Image
                src="/images/Destinations/ZumaRock.jpg"
                alt="Destination 1"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-4"> Zuma Rock, Niger</h2>
                <p className="text-gray-700 mb-4">Zuma Rock is a majestic monolith standing at 725 metres above its surroundings. its unique shape and distinct natural contour of a human face on one side of the rock gives it an imposing personality that will leave you speechless and astonished.</p>
                <a href="#" className="text-teal-500 hover:text-teal-700 font-bold">Learn More</a>
              </div>
            </div>

            {/* Destination 2 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <Image
                src="/images/Destinations/WikkiWarmSpring.jpg"
                alt="Destination 2"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-4"> Wikki Warm Spring, Bauchi.</h2>
                <p className="text-gray-700 mb-4">Nestled in Yankari National Park in Bauchi State, Nigeria, this natural warm spring offers a perfect getaway destination to relax and unwind with nature.</p>
                <a href="#" className="text-teal-500 hover:text-teal-700 font-bold">Learn More</a>
              </div>
            </div>

            {/* Destination 3 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <Image
                src="/images/Destinations/AwhumCave.jpg"
                alt="Destination 3"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-4"> Awhum Ohum Cave, Enugu</h2>
                <p className="text-gray-700 mb-4">The tranquil Awhum cave offers a prayer atmosphere that facilitates spiritual uplifting and the renewal of mind and body. The cave houses a crucifix of Jesus Christ and a grotto of Joseph and Mary, where monks and pilgrims perform their spiritual exercise.</p>
                <a href="#" className="text-teal-500 hover:text-teal-700 font-bold">Learn More</a>
              </div>
            </div>

            {/* Destination 4 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <Image
                src="/images/Destinations/ObuduHolyMountain.jpg"
                alt="Destination 4"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-4">The Obudu Holy Mountain, Cross River State</h2>
                <p className="text-gray-700 mb-4">The exotic Obudu Plateau towers over 5200 feet above sea level with a sub-temperate climate of between 15C and 23C.</p>
                <a href="#" className="text-teal-500 hover:text-teal-700 font-bold">Learn More</a>
              </div>
            </div>

            {/* Destination 5 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <Image
                src="/images/Destinations/GuraraWaterfallNiger.jpg"
                alt="Destination 5"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-4"> Gurara Waterfall, Niger</h2>
                <p className="text-gray-700 mb-4">The spectacular Gurara waterfall spans 200 meters across with a drop of about 30 metres. It changes its shape from a calm graceful waterfall in the dry season to a vast thundering fall in the rainy season.</p>
                <a href="#" className="text-teal-500 hover:text-teal-700 font-bold">Learn More</a>
              </div>
            </div>

            {/* Destination 6 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <Image
                src="/images/Destinations/IdanreHill.jpg"
                alt="Destination 6"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-4">Idanre Hill, Ondo.</h2>
                <p className="text-gray-700 mb-4">Idanre Hill consists of high plain with spectacular valleys interspersed with inselbergs of about 3,000 ft above sea level, and an abundance of diverse and variegated eco-systems of flora and fauna.</p>
                <a href="#" className="text-teal-500 hover:text-teal-700 font-bold">Learn More</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default DestinationsPage;
