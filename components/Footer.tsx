import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold mb-4 text-lg">About Us</h3>
            <p className="text-sm">Curating once-in-a-lifetime experiences in breathtaking destinations. Let’s make your travel dreams come true</p>
          </div>
          <div>
            <h3 className="font-bold mb-4 text-lg">Quick Links</h3>
            <ul className="space-y-2">
            <li><Link href="/dashboard/destinations" className="text-gray-700 hover:text-gray-900">Destinations</Link></li>
            <li><Link href="/dashboard/blog" className="text-gray-700 hover:text-gray-900">Blog</Link></li>
            <li><Link href="/dashboard/about-us" className="text-gray-700 hover:text-gray-900">About Us</Link></li>
            <li><Link href="/dashboard/contact-us" className="text-gray-700 hover:text-gray-900">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4 text-lg">Contact Us</h3>
            <p className="text-sm">123 Main St, Lagos City, Nigeria</p>
            <p className="text-sm">+234 456 789</p>
          </div>
          <div>
            <h3 className="font-bold mb-4 text-lg">Follow Us</h3>
            <ul className="flex space-x-4">
              <li><Link href="#" className="text-gray-400 hover:text-white">Facebook</Link></li>
              <li><Link href="https://www.instagram.com/tripswitglory/" className="text-gray-400 hover:text-white">Instagram</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
