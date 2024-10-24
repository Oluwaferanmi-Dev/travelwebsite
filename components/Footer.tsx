import Link from 'next/link'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function Footer() {
  return (
    <footer className="bg-teal-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold mb-2">About Us</h3>
            <p className="text-sm">Your trusted travel partner for unforgettable adventures around the world.</p>
          </div>
          <div>
            <h3 className="font-bold mb-2">Quick Links</h3>
            <ul className="text-sm">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/dashboard/destinations">Destinations</Link></li>
              <li><Link href="/dashboard/tours">Tours</Link></li>
              <li><Link href="/dashboard/contact-us">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2">Contact Us</h3>
            <p className="text-sm">123 Travel Street, City, Country</p>
            <p className="text-sm">Phone: +1 234 567 890</p>
            <p className="text-sm">Email: info@travelagency.com</p>
          </div>
          <div>
            <h3 className="font-bold mb-2">Newsletter</h3>
            <form className="flex">
              <Input type="email" placeholder="Your email" className="rounded-r-none" />
              <Button type="submit" className="rounded-l-none">Subscribe</Button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  )
}
