import Link from 'next/link';

const ReviewsArticles = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Customer Reviews</h2>
          <p className="text-gray-600">"Lorem ipsum is simply dummy text of the printing and typesetting industry."</p>
          <p className="text-gray-800 font-bold mt-4">John Doe</p>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Recent Travel Articles</h2>
          <ul>
            <li><Link href="#" className="text-gray-700 hover:text-gray-900">2024: The Year You Make Travel Happen</Link></li>
            <li><Link href="#" className="text-gray-700 hover:text-gray-900">How to Save Money in Dubai</Link></li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ReviewsArticles;
