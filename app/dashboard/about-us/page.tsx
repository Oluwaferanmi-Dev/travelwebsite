import Image from 'next/image';
import { FC } from 'react';
import Header from '../../../components/Header'; 
import Footer from '../../../components/Footer'; 

const AboutUs: FC = () => {
  return (
    <div>
      <Header />
      <main className="py-16 px-4 md:px-8 bg-gray-50">
        <section className="container mx-auto mb-12">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">About Us</h1>
            <p className="text-lg text-gray-600">Discover who we are and what drives our passion for travel.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative h-80 bg-gray-200 rounded-lg overflow-hidden">
              <Image
                src="/images/travel-agency-team.jpg"
                alt="Our Team"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h2>
              <p className="text-gray-600 mb-4">
                At Travel Agency, our mission is to provide unforgettable travel experiences through exceptional service, personalized itineraries, and a deep understanding of the world’s most exciting destinations.
              </p>
              <p className="text-gray-600 mb-4">
                We are committed to making travel accessible and enjoyable for everyone. Our team of experts works tirelessly to ensure that every detail of your journey is taken care of, allowing you to focus on creating memories that will last a lifetime.
              </p>
            </div>
          </div>
        </section>
        
        <section className="container mx-auto mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="relative h-40 bg-gray-200 rounded-full overflow-hidden">
                <Image
                  src="/images/team-member1.jpg"
                  alt="Team Member 1"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                />
              </div>
              <h3 className="text-xl font-semibold mt-4">John Doe</h3>
              <p className="text-gray-600">Founder & CEO</p>
              <p className="text-gray-600 mt-2">
                John is the visionary behind Travel Agency. With over 15 years of experience in the travel industry, he leads our team with passion and dedication.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="relative h-40 bg-gray-200 rounded-full overflow-hidden">
                <Image
                  src="/images/team-member2.jpg"
                  alt="Team Member 2"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                />
              </div>
              <h3 className="text-xl font-semibold mt-4">Jane Smith</h3>
              <p className="text-gray-600">Travel Consultant</p>
              <p className="text-gray-600 mt-2">
                Jane brings her extensive travel knowledge and expertise to help clients plan their perfect trips. She’s passionate about delivering exceptional service.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="relative h-40 bg-gray-200 rounded-full overflow-hidden">
                <Image
                  src="/images/team-member3.jpg"
                  alt="Team Member 3"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                />
              </div>
              <h3 className="text-xl font-semibold mt-4">Alice Johnson</h3>
              <p className="text-gray-600">Customer Support</p>
              <p className="text-gray-600 mt-2">
                Alice is the friendly face behind our customer support. She ensures that every client’s needs are met promptly and effectively.
              </p>
            </div>
          </div>
        </section>
        
        <section className="container mx-auto mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Customer First</h3>
              <p className="text-gray-600">
                We prioritize our customers’ needs and work tirelessly to exceed their expectations.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Integrity</h3>
              <p className="text-gray-600">
                We uphold the highest standards of honesty and transparency in all our dealings.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Innovation</h3>
              <p className="text-gray-600">
                We embrace creativity and innovation to provide unique travel solutions.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Excellence</h3>
              <p className="text-gray-600">
                We strive for excellence in every aspect of our service, from planning to execution.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutUs;
