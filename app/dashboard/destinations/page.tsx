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
                src="/images/destination1.jpg"
                alt="Destination 1"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-4">Paris, France</h2>
                <p className="text-gray-700 mb-4">The city of love, known for its iconic Eiffel Tower, rich history, and vibrant culture.</p>
                <a href="#" className="text-teal-500 hover:text-teal-700 font-bold">Learn More</a>
              </div>
            </div>

            {/* Destination 2 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <Image
                src="/images/destination2.jpg"
                alt="Destination 2"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-4">Santorini, Greece</h2>
                <p className="text-gray-700 mb-4">Famous for its whitewashed buildings and crystal-clear waters, a perfect getaway for relaxation.</p>
                <a href="#" className="text-teal-500 hover:text-teal-700 font-bold">Learn More</a>
              </div>
            </div>

            {/* Destination 3 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <Image
                src="/images/destination3.jpg"
                alt="Destination 3"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-4">Tokyo, Japan</h2>
                <p className="text-gray-700 mb-4">A bustling city with futuristic skyscrapers, traditional temples, and world-class cuisine.</p>
                <a href="#" className="text-teal-500 hover:text-teal-700 font-bold">Learn More</a>
              </div>
            </div>

            {/* Destination 4 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <Image
                src="/images/destination4.jpg"
                alt="Destination 4"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-4">Bali, Indonesia</h2>
                <p className="text-gray-700 mb-4">Known for its stunning beaches, lush green rice terraces, and cultural landmarks.</p>
                <a href="#" className="text-teal-500 hover:text-teal-700 font-bold">Learn More</a>
              </div>
            </div>

            {/* Destination 5 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <Image
                src="/images/destination5.jpg"
                alt="Destination 5"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-4">New York City, USA</h2>
                <p className="text-gray-700 mb-4">Explore the Big Apple, from Times Square to Central Park, and experience its vibrant energy.</p>
                <a href="#" className="text-teal-500 hover:text-teal-700 font-bold">Learn More</a>
              </div>
            </div>

            {/* Destination 6 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <Image
                src="/images/destination6.jpg"
                alt="Destination 6"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-4">Cape Town, South Africa</h2>
                <p className="text-gray-700 mb-4">Enjoy breathtaking views from Table Mountain and explore the vibrant culture of Cape Town.</p>
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
