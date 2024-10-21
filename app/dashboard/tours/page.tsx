import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Plane, Luggage, PartyPopper, Heart } from "lucide-react";

export default function TourPackages() {
  const tourPackages = [
    // New Tours
    { name: "Dubai Tour packages", description: "Experience the beauty and culture of Dubai.", imageSrc: "/images/tours/dubai.jpg" },
    { name: "Tour Kenya safaris", description: "Experience the beauty and culture of Kenya safaris.", imageSrc: "/images/Tours/kenyasafaris.jpg" },
    { name: "Zanzibar", description: "Experience the beauty and culture of Zanzibar.", imageSrc: "/images/Tours/zanzibar.jpg" },
    { name: "Cape Town", description: "Experience the beauty and culture of Cape Town.", imageSrc: "/images/Tours/CapeTown.jpg" },
    { name: "La campaign tropical", description: "Experience the beauty and culture of La campaign tropical.", imageSrc: "/images/Tours/Lacampaigntropical.jpg" },

    // Old Tours with updated images
    { name: "Abuja: Explore the Art and Crafts Market", description: "Explore the vibrant art and craft market in Abuja, showcasing a rich diversity of Nigerian culture.", imageSrc: "/images/Tours/Abujatour.jpg" },
    { name: "Abuja: Explore Ushafa Crush Rock with Lunch", description: "Discover the hidden wonder of Ushafa Crush Rock, where the surroundings artistry meets breathtaking views.", imageSrc: "/images/Tours/AbujaCrushTour.jpg" },
    { name: "Lagos: Experience 1-Day Adventure", description: "This tour will give you the best experience of some of the notable parts of Lagos.", imageSrc: "/images/Tours/LagosTour.jpg" },
    { name: "Makoko Floating Community Tour", description: "Explore the Makoko community, Lagos's own Venice on this guided canoe ride.", imageSrc: "/images/Tours/MakokoTour.jpg" },
    { name: "Slave Trade Tour", description: "Explore the former slave quarters and see the preserved relics at the Slave Museums.", imageSrc: "/images/Tours/SlaveTrade.jpg" },
    { name: "Osun Osogbo Sacred Grove Tour", description: "Visit this UNESCO Heritage site rich in history and tradition.", imageSrc: "/images/Tours/OsunOsogbo.jpg" }
  ];

  return (
    <>
      <Header />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">Our Tour Packages and Services</h1>
        <Tabs defaultValue="tours" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="tours">Tour Packages</TabsTrigger>
            <TabsTrigger value="visas">Visa Services</TabsTrigger>
            <TabsTrigger value="events">Events</TabsTrigger>
          </TabsList>

          <TabsContent value="tours">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tourPackages.map((tour, index) => (
                <Card key={index}>
                  <Image src={tour.imageSrc} alt={tour.name} width={600} height={400} className="w-full h-auto object-cover" />
                  <CardHeader>
                    <CardTitle>{tour.name}</CardTitle>
                    <CardDescription>Explore amazing destinations</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">{tour.description}</p>
                    <Button className="w-full">
                      <Plane className="mr-2 h-4 w-4" /> Book Now
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Visa Services */}
          <TabsContent value="visas">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {["DUBAI", "UK", "USA", "KENYA", "EAST-AFRICA", "South Africa"].map((country) => (
                <Card key={country} className="text-center">
                  <CardHeader>
                    <CardTitle>{country}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Luggage className="mx-auto mb-4 h-12 w-12 text-primary" />
                    <Button variant="outline" className="w-full">Apply for Visa</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Events */}
          <TabsContent value="events">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <Image src="/images/Tours/wedding.jpg" alt="Wedding Event" width={600} height={400} className="w-full h-auto object-cover" />
              <CardHeader>
                <CardTitle>Weddings</CardTitle>
                <CardDescription>Plan your perfect wedding</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside mb-4">
                  <li>Destination weddings</li>
                  <li>Wedding planning services</li>
                  <li>Honeymoon packages</li>
                </ul>
                <Button className="w-full">
                  <Heart className="mr-2 h-4 w-4" /> Learn More
                </Button>
              </CardContent>
            </Card>

            <Card>
              <Image src="/images/Tours/special.jpg" alt="Special Occasion Event" width={600} height={400} className="w-full h-auto object-cover" />
              <CardHeader>
                <CardTitle>Special Occasions</CardTitle>
                <CardDescription>Celebrate in style</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside mb-4">
                  <li>Bridal showers</li>
                  <li>Honeymoon tool-kit</li>
                  <li>Honeymoon suite</li>
                </ul>
                <Button className="w-full">
                  <PartyPopper className="mr-2 h-4 w-4" /> Book Event
                </Button>
              </CardContent>
            </Card>

            <Card>
              <Image src="/images/Tours/retreat.jpg" alt="Retreat Event" width={600} height={400} className="w-full h-auto object-cover" />
              <CardHeader>
                <CardTitle>Retreats</CardTitle>
                <CardDescription>Relax and rejuvenate</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside mb-4">
                  <li>Corporate retreats</li>
                  <li>Spiritual retreats</li>
                  <li>Yoga retreats</li>
                </ul>
                <Button className="w-full">
                  <Heart className="mr-2 h-4 w-4" /> Learn More
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        </Tabs>
      </div>
      <Footer />
    </>
  );
}
