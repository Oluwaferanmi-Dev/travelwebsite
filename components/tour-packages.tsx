'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Plane, PartyPopper, Heart, Luggage  } from "lucide-react";


export function TourPackagesComponent() {
  return (
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
            {["Dubai Tour packages", "Tour Kenya safaris", "Zanzibar", "Cape Town", "La campaign tropical"].map((tour) => (
              <Card key={tour}>
                <CardHeader>
                  <CardTitle>{tour}</CardTitle>
                  <CardDescription>Explore amazing destinations</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">Experience the beauty and culture of {tour}.</p>
                  <Button className="w-full">
                    <Plane className="mr-2 h-4 w-4" /> Book Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
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
        <TabsContent value="events">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
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
              <CardHeader>
                <CardTitle>Retreats</CardTitle>
                <CardDescription>Relax and rejuvenate</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside mb-4">
                  <li>BSS retreat</li>
                  <li>Divalicious Ladies hangout</li>
                  <li>Custom retreat packages</li>
                </ul>
                <Button className="w-full">Plan Retreat</Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
      <div className="mt-12 text-center">
        <h2 className="text-2xl font-semibold mb-4">Need help planning your trip?</h2>
        <p className="mb-6">Our travel experts are here to assist you in creating the perfect itinerary.</p>
        <Button size="lg">
          Contact Us
        </Button>
      </div>
    </div>
  )
}