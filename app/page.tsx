import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import PopularPackages from '../components/PopularPackages';
import ReviewsArticles from '../components/ReviewsArticles';
import InternationalPackages from '../components/InternationalPackages';
import Footer from '../components/Footer';
import { Metadata } from 'next';


export const metadata: Metadata = {
  title: 'Tripswitglory - Explore Nigeria',
  description: 'Discover amazing vacation packages to Nigeria. Book flights, tours, and more.',
  keywords: 'Nigeria, travel, tours, flight booking, vacation packages',
};


export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <PopularPackages />
      <InternationalPackages />
      <ReviewsArticles />
      <Footer />
    </>
  );
}
