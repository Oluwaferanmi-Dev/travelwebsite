import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import Image from 'next/image';

const DestinationsPage = () => {
  const destinations = [
    {
      title: "Zuma Rock, Niger",
      description: "Zuma Rock is a majestic monolith standing at 725 metres above its surroundings. Its unique shape and distinct natural contour of a human face on one side of the rock gives it an imposing personality that will leave you speechless and astonished.",
      imageSrc: "/images/Destinations/ZumaRock.jpg",
      alt: "Zuma Rock, Niger"
    },
    {
      title: "Wikki Warm Spring, Bauchi",
      description: "Nestled in Yankari National Park in Bauchi State, Nigeria, this natural warm spring offers a perfect getaway destination to relax and unwind with nature.",
      imageSrc: "/images/Destinations/WikkiWarmSpring.jpg",
      alt: "Wikki Warm Spring, Bauchi"
    },
    {
      title: "Awhum Ohum Cave, Enugu",
      description: "The tranquil Awhum cave offers a prayer atmosphere that facilitates spiritual uplifting and the renewal of mind and body. The cave houses a crucifix of Jesus Christ and a grotto of Joseph and Mary, where monks and pilgrims perform their spiritual exercise.",
      imageSrc: "/images/Destinations/AwhumCave.jpg",
      alt: "Awhum Ohum Cave, Enugu"
    },
    {
      title: "The Obudu Holy Mountain, Cross River State",
      description: "The exotic Obudu Plateau towers over 5200 feet above sea level with a sub-temperate climate of between 15C and 23C.",
      imageSrc: "/images/Destinations/ObuduHolyMountain.jpg",
      alt: "The Obudu Holy Mountain, Cross River State"
    },
    {
      title: "Gurara Waterfall, Niger",
      description: "The spectacular Gurara waterfall spans 200 meters across with a drop of about 30 metres. It changes its shape from a calm graceful waterfall in the dry season to a vast thundering fall in the rainy season.",
      imageSrc: "/images/Destinations/GuraraWaterfallNiger.jpg",
      alt: "Gurara Waterfall, Niger"
    },
    {
      title: "Idanre Hill, Ondo",
      description: "Idanre Hill consists of high plain with spectacular valleys interspersed with inselbergs of about 3,000 ft above sea level, and an abundance of diverse and variegated eco-systems of flora and fauna.",
      imageSrc: "/images/Destinations/IdanreHill.jpg",
      alt: "Idanre Hill, Ondo"
    },
  ];

  return (
    <>
      <Header />
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 md:px-8">
          <h1 className="text-4xl font-bold text-center mb-12">Explore Our Destinations</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((destination) => (
              <div key={destination.title} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="relative w-full h-64">
                  <Image
                    src={destination.imageSrc}
                    alt={destination.alt}
                    fill
                    className="object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-bold mb-4">{destination.title}</h2>
                  <p className="text-gray-700 mb-4">{destination.description}</p>
                  <a href="#" className="text-teal-500 hover:text-teal-700 font-bold">Learn More</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default DestinationsPage;
