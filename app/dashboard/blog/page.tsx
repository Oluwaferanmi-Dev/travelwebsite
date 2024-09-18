import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import Image from 'next/image';

const BlogPage = () => {
  return (
    <>
      <Header />
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-8">
          {/* Main Blog Post */}
          <div className="mb-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-4xl mx-auto">
              <Image
                src="/images/main-blog.jpg"
                alt="Main Blog"
                width={1000}
                height={400}
                className="w-full h-auto object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Main Blog Title</h2>
                <p className="text-gray-700 mb-4">A brief introduction to the main blog post content. This is a sample placeholder for the content that will be shown on the blog page...</p>
                <a href="#" className="text-teal-500 hover:text-teal-700 font-bold">Read more</a>
              </div>
            </div>
          </div>

          {/* Two Smaller Blog Posts */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Blog Post */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <Image
                src="/images/left-blog.jpg"
                alt="Left Blog"
                width={600}
                height={300}
                className="w-full h-auto object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl md:text-2xl font-bold mb-4">Left Blog Title</h3>
                <p className="text-gray-700 mb-4">This is a summary of the left blog post content, giving users an idea of what the post is about...</p>
                <a href="#" className="text-teal-500 hover:text-teal-700 font-bold">Read more</a>
              </div>
            </div>

            {/* Right Blog Post */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <Image
                src="/images/right-blog.jpg"
                alt="Right Blog"
                width={600}
                height={300}
                className="w-full h-auto object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl md:text-2xl font-bold mb-4">Right Blog Title</h3>
                <p className="text-gray-700 mb-4">A brief description of the right blog post content, enticing readers to click through and read more...</p>
                <a href="#" className="text-teal-500 hover:text-teal-700 font-bold">Read more</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default BlogPage;
