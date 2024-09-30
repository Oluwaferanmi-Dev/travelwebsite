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
                src="/images/Tours/Abujatour.jpg"
                alt="Tour 1"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-4"> Abuja: explore the art and crafts market</h2>
                <p className="text-gray-700 mb-4">explore the art and craft market in Abuja a vibrant hub showcasing a rich diversity of Nigeria it offers traditional artworks, textiles, sculptures, jewelry, and more.</p>
                <a href="#" className="text-teal-500 hover:text-teal-700 font-bold">Book Now</a>
              </div>
            </div>

            {/* Tour 2 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <Image
                src="/images/Tours/AbujaCrushTour.jpg"
                alt="Tour 2"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-4">Abuja: Explore Ushafa Crush Rock with lunch</h2>
                <p className="text-gray-700 mb-4">Discover the hidden wonder of Ushafa Crush Rock, where the surroundings artistry meets breathtaking views.</p>
                <a href="#" className="text-teal-500 hover:text-teal-700 font-bold">Book Now</a>
              </div>
            </div>

            {/* Tour 3 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <Image
                src="/images/Tours/LagosTour.jpg"
                alt="Tour 3"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-4">Lagos: Experience 1 Day Adventure</h2>
                <p className="text-gray-700 mb-4">This tour will give you the best of experience of some of the notable parts of Lagos.</p>
                <a href="#" className="text-teal-500 hover:text-teal-700 font-bold">Book Now</a>
              </div>
            </div>

            {/* Tour 4 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <Image
                src="/images/Tours/SlaveTrade.jpg"
                alt="Tour 4"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-4">Makoko Floating Community Tour</h2>
                <p className="text-gray-700 mb-4">Explore the Makoko community, the world’s largest floating village which lives on stilt houses on water. Discover Lagos’s own Venice on this guided canoe ride through the watery fishing neighborhood.</p>
                <a href="#" className="text-teal-500 hover:text-teal-700 font-bold">Book Now</a>
              </div>
            </div>

            {/* Tour 5 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <Image
                src="/images/Tours/OsunOsogbo.jpg"
                alt="Tour 5"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-4">Slave Trade Tour</h2>
                <p className="text-gray-700 mb-4">The story of 400 years of slavery cannot be told without a visit to the former slave port. This is a private tour to explore the former slave quarters and see the preserved relics at the Slave Museums</p>
                <a href="#" className="text-teal-500 hover:text-teal-700 font-bold">Book Now</a>
              </div>
            </div>

            {/* Tour 6 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <Image
                src="/images/Tours/OsunOsogbo.jpg"
                alt="Tour 6"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-4">Osun Osogbo Sacred Grove Tour</h2>
                <p className="text-gray-700 mb-4">This is a UNESCO Heritage site with rich history, culture, and tradition. It is open and available to anyone who is interested in increasing their knowledge in a fun way.</p>
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
