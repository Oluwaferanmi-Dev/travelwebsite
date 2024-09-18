import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import Image from 'next/image';

const ToursPage = () => {
  return (
    <>
      <Header />
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 md:px-8">
          <h1 className="text-4xl font-bold text-center mb-12">Our Tours</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Tour 1 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <Image
                src="/images/tour1.jpg"
                alt="Tour 1"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-4">Tropical Beach Escape</h2>
                <p className="text-gray-700 mb-4">Enjoy a serene getaway to a beautiful tropical beach, where the sand is golden and the waters crystal clear.</p>
                <a href="#" className="text-teal-500 hover:text-teal-700 font-bold">Book Now</a>
              </div>
            </div>

            {/* Tour 2 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <Image
                src="/images/tour2.jpg"
                alt="Tour 2"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-4">Mountain Hiking Adventure</h2>
                <p className="text-gray-700 mb-4">Challenge yourself with a hiking adventure to breathtaking mountain peaks and scenic views.</p>
                <a href="#" className="text-teal-500 hover:text-teal-700 font-bold">Book Now</a>
              </div>
            </div>

            {/* Tour 3 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <Image
                src="/images/tour3.jpg"
                alt="Tour 3"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-4">Cultural City Tour</h2>
                <p className="text-gray-700 mb-4">Immerse yourself in the vibrant culture of the city with a guided tour of historical landmarks and local attractions.</p>
                <a href="#" className="text-teal-500 hover:text-teal-700 font-bold">Book Now</a>
              </div>
            </div>

            {/* Tour 4 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <Image
                src="/images/tour4.jpg"
                alt="Tour 4"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-4">Safari Adventure</h2>
                <p className="text-gray-700 mb-4">Embark on an unforgettable safari adventure and witness wildlife up close in their natural habitat.</p>
                <a href="#" className="text-teal-500 hover:text-teal-700 font-bold">Book Now</a>
              </div>
            </div>

            {/* Tour 5 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <Image
                src="/images/tour5.jpg"
                alt="Tour 5"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-4">Island Hopping Tour</h2>
                <p className="text-gray-700 mb-4">Explore multiple islands, each with its own unique charm and beauty, on a day of island hopping adventures.</p>
                <a href="#" className="text-teal-500 hover:text-teal-700 font-bold">Book Now</a>
              </div>
            </div>

            {/* Tour 6 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <Image
                src="/images/tour6.jpg"
                alt="Tour 6"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-4">Desert Safari Experience</h2>
                <p className="text-gray-700 mb-4">Experience the thrills of a desert safari, including dune bashing, camel rides, and a beautiful desert sunset.</p>
                <a href="#" className="text-teal-500 hover:text-teal-700 font-bold">Book Now</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ToursPage;
